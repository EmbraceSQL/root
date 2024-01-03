/**
 * A single debounce map entry is a function
 * that will execute in the future, but can be cancelled.
 */
class DebounceMapEntry {
  private timeout: ReturnType<typeof setTimeout>;
  constructor(
    toExecute: () => Promise<void>,
    onExecute: () => void,
    waitFor: number,
  ) {
    this.timeout = setTimeout(() => {
      onExecute();
      void toExecute();
    }, waitFor);
  }

  cancel() {
    clearTimeout(this.timeout);
  }
}

/**
 * A debounce map keeps track of multiple debounced functions
 */
export class DebounceMap {
  private registry = new Map<string, DebounceMapEntry>();

  /**
   * In goes a function.
   *
   * If that function does not exist by key, schedule a debounce.
   *
   * If that function exists by key, time to cancel and replace it.
   */
  register(key: string, toExecute: () => Promise<void>, waitFor = 200) {
    if (key) {
      this.registry.get(key)?.cancel();
      this.registry.set(
        key,
        new DebounceMapEntry(
          toExecute,
          () => this.registry.delete(key),
          waitFor,
        ),
      );
    } else {
      void toExecute();
    }
  }
}

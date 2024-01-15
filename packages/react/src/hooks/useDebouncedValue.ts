import React from "react";

/**
 * Set a hook on a `value`, which will return updated state at most every `delay`
 * milliseconds.
 */
export function useDebouncedValue<T>(value: T, delay?: number): T {
  const [debouncedValue, setDebouncedValue] = React.useState<T>(value);

  React.useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay || 500);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
}

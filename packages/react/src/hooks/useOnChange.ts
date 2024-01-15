import React from "react";

/**
 * Set a hook on an `HTMLInputElement.onChange` event.
 *
 * On a change, the `HTMLInputElement.value` is run through an optional
 * `parser`, which will convert from string to `T`.
 *
 * Returns an object, which you can alias at the call site.
 * - `onChange` event handler, attach it to your `HTMLInputElement`
 * - `value` which is the parsed final value.
 * - `error` if the parse failed.
 */
export function useOnChange<T = string>(parser?: (value: unknown) => T) {
  const [value, setValue] = React.useState<T>();
  const [error, setError] = React.useState<Error>();

  const onChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      if (parser) {
        try {
          setValue(parser(event.target.value));
          setError(undefined);
        } catch (e) {
          setError(e as Error);
        }
      } else {
        setValue(event.target.value as T);
      }
    },
    [parser],
  );

  return { onChange, value, error };
}

import React from "react";

export * from "@embracesql/client";
export * from "./provider";
export * from "./useEmbraceSQL";
export * from "./row";
export * from "./hooks/useDebouncedValue";
export * from "./hooks/useOnChange";

type Setter<T> = (newValue: T) => void;

/**
 * This is a terrible filter, but if you don't have any better
 * ideas -- cast.
 */
function defaultFilter<C, T>(c: C) {
  return c as unknown as T;
}

/**
 * Change event marshalling from React to an EmbraceSQL data object.
 *
 * This handles the change event by capturing the changed value, which
 * may be run through an optional filter function that can be used for
 * type casting or conversion from UI elements.
 */
export function handleChange<C = string, T = string>(
  setter: Setter<T>,
  filter = defaultFilter<C, T>,
) {
  return (event: React.ChangeEvent<HTMLInputElement>) => {
    // filter and set
    setter(filter(event.target.value as unknown as C));
  };
}

export * from "./uuid";
export type JsDate = Date;
export type Empty = Record<string, never>;
export type JSONValue =
  | string
  | number
  | boolean
  | { [x: string]: JSONValue }
  | Array<JSONValue>;
export type JSONObject = {
  [key: string]: JSONValue | JSONObject;
};
export type Nullable<T> = T | null | undefined;

/**
 * Database proc request/response message holder.
 *
 * Why? This exists to subclass and get a named constructor so that
 * we can know exactly which Request goes with with Proc goes with which Response.
 *
 * So subclass this with generated code for each proc.
 */
export abstract class InvokeProc<RequestType, ResponseType> {
  request: RequestType;
  response?: ResponseType;

  constructor(request: RequestType) {
    this.request = request;
    this.response = undefined;
  }
  /**
   * This is the main thing to override to know exactly which procedure
   * to invoke.
   */
  get procedureName() {
    return "";
  }
}

/**
 * This is a workaround as postgers driver does not auto translate
 * undeefined to null.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const undefinedIsNull = (value: any) => {
  if (value === undefined) return null;
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return value;
};

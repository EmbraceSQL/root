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

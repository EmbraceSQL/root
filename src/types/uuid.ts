/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { v4 } from "uuid";
import { isString } from "../util";

export class UUID {
  uuid: string;
  constructor(uuid: string | UUID) {
    if (isString(uuid)) {
      this.uuid = uuid;
    } else {
      this.uuid = uuid.uuid;
    }
  }

  static new() {
    return new UUID(v4());
  }
  toString() {
    return this.uuid;
  }
  equals(other: UUID | undefined | null) {
    return this.uuid === other?.uuid;
  }
}

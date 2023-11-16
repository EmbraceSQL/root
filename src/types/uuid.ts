import { v4 } from "uuid";

/**
 * A fairly boring type guard for strings.
 */
const isString = (v: string | UUID): v is string => {
  return typeof v === "string" || v instanceof String;
};

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

import { number, whitespace } from "./shared";
import parsimmon from "parsimmon";

type Point = {
  x: number;
  y: number;
};

function isPoint(from: unknown): from is Point {
  return (
    typeof (from as Point)?.x === "number" &&
    typeof (from as Point)?.y === "number"
  );
}

// docs at https://www.postgresql.org/docs/current/datatype-geometric.html

const pointParser = parsimmon.seqObj<Point>(
  parsimmon.string("(").skip(whitespace),
  ["x", number],
  parsimmon.string(",").skip(whitespace),
  ["y", number],
  parsimmon.string(")").skip(whitespace),
);

/**
 * Parse postgres string representation of points.
 */
export function parsePoint(from: unknown) {
  if (typeof from === "string") {
    return pointParser.tryParse(from);
  }
  if (isPoint(from)) {
    return from;
  }
  return null;
}

/**
 * Serialize a point.
 */
export function serializePoint(x: unknown) {
  const point = x as Point;
  if (point === undefined || point === null) return null;
  return `(${point.x}, ${point.y})`;
}

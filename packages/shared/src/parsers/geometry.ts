/* eslint-disable no-inner-declarations */

/* eslint-disable @typescript-eslint/no-namespace */
import { number, whitespace } from "./shared";
import parsimmon from "parsimmon";

export namespace Geometry {
  export type Point = {
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

  export type Line = {
    a: number;
    b: number;
    c: number;
  };

  function isLine(from: unknown): from is Line {
    return (
      typeof (from as Line)?.a === "number" &&
      typeof (from as Line)?.b === "number" &&
      typeof (from as Line)?.c === "number"
    );
  }

  const lineParser = parsimmon.seqObj<Line>(
    parsimmon.string("{").skip(whitespace),
    ["a", number],
    parsimmon.string(",").skip(whitespace),
    ["b", number],
    parsimmon.string(",").skip(whitespace),
    ["c", number],
    parsimmon.string("}").skip(whitespace),
  );

  /**
   * Parse postgres string representation of an infinite line.
   */
  export function parseLine(from: unknown) {
    if (typeof from === "string") {
      return lineParser.tryParse(from);
    }
    if (isLine(from)) {
      return from;
    }
    return null;
  }

  /**
   * Serialize an infinite line.
   */
  export function serializeLine(x: unknown) {
    const line = x as Line;
    if (line === undefined || line === null) return null;
    return `{${line.a}, ${line.b}, ${line.c}}`;
  }
}

/* eslint-disable no-inner-declarations */

/* eslint-disable @typescript-eslint/no-namespace */
import { number, whitespace } from "./shared";
import parsimmon from "parsimmon";

/**
 * 2D geometry support built in postgres types.
 * Docs at https://www.postgresql.org/docs/current/datatype-geometric.html
 */
export namespace Geometry {
  /**
   * A single point in a 2D space.
   */
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

  const pointParserParen = parsimmon.seqObj<Point>(
    parsimmon.string("(").skip(whitespace),
    ["x", number],
    parsimmon.string(",").skip(whitespace),
    ["y", number],
    parsimmon.string(")").skip(whitespace),
  );
  const pointParserBare = parsimmon.seqObj<Point>(
    ["x", number],
    parsimmon.string(",").skip(whitespace),
    ["y", number],
  );
  const pointParser = parsimmon.alt(pointParserParen, pointParserBare);

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

  /**
   * An infinite line like in Algebra class.
   *
   * Math out:
   * ax + by + c = 0
   * 🧮
   */
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

  /**
   * A line with a finite start and end.
   */
  export type LineSegment = {
    from: Point;
    to: Point;
  };

  function isLineSegment(from: unknown): from is LineSegment {
    return (
      isPoint((from as LineSegment)?.from) && isPoint((from as LineSegment)?.to)
    );
  }

  const lineSegmentParserParen = parsimmon.seqObj<LineSegment>(
    parsimmon.string("(").skip(whitespace),
    ["from", pointParser],
    parsimmon.string(",").skip(whitespace),
    ["to", pointParser],
    parsimmon.string(")").skip(whitespace),
  );
  const lineSegmentParserBracket = parsimmon.seqObj<LineSegment>(
    parsimmon.string("[").skip(whitespace),
    ["from", pointParser],
    parsimmon.string(",").skip(whitespace),
    ["to", pointParser],
    parsimmon.string("]").skip(whitespace),
  );
  const lineSegmentParserBare = parsimmon.seqObj<LineSegment>(
    ["from", pointParser],
    parsimmon.string(",").skip(whitespace),
    ["to", pointParser],
  );
  const lineSegmentParser = parsimmon.alt(
    lineSegmentParserParen,
    lineSegmentParserBracket,
    lineSegmentParserBare,
  );

  /**
   * Parse postgres string representation of a line segment.
   */
  export function parseLineSegment(from: unknown) {
    if (typeof from === "string") {
      return lineSegmentParser.tryParse(from);
    }
    if (isLineSegment(from)) {
      return from;
    }
    return null;
  }

  /**
   * Serialize a line segment to postgres text format.
   */
  export function serializeLineSegment(x: unknown) {
    const line = x as LineSegment;
    if (line === undefined || line === null) return null;
    return `(${serializePoint(line.from)}, ${serializePoint(line.to)})`;
  }
}

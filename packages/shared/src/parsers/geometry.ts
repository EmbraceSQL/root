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

  /**
   * A box defined by corners
   */
  export type Box = {
    upperRight: Point;
    lowerLeft: Point;
  };

  function isBox(from: unknown): from is Box {
    return (
      isPoint((from as Box)?.upperRight) && isPoint((from as Box)?.lowerLeft)
    );
  }

  const boxParserParen = parsimmon.seqObj<Box>(
    parsimmon.string("(").skip(whitespace),
    ["upperRight", pointParser],
    parsimmon.string(",").skip(whitespace),
    ["lowerLeft", pointParser],
    parsimmon.string(")").skip(whitespace),
  );
  const boxParserBare = parsimmon.seqObj<Box>(
    ["upperRight", pointParser],
    parsimmon.string(",").skip(whitespace),
    ["lowerLeft", pointParser],
  );
  const boxParser = parsimmon.alt(boxParserParen, boxParserBare);

  /**
   * Parse postgres string representation of a box.
   */
  export function parseBox(from: unknown) {
    if (typeof from === "string") {
      return boxParser.tryParse(from);
    }
    if (isBox(from)) {
      return from;
    }
    return null;
  }

  /**
   * Serialize a line segment to postgres text format.
   */
  export function serializeBox(x: unknown) {
    const box = x as Box;
    if (box === undefined || box === null) return null;
    return `(${serializePoint(box.upperRight)}, ${serializePoint(
      box.lowerLeft,
    )})`;
  }

  export enum PathKind {
    Open,
    Closed,
  }

  type HasPoints = {
    points: Point[];
  };

  export type Path = HasPoints & {
    kind: PathKind;
  };

  function isPath(from: unknown): from is Path {
    return (
      isPoint((from as Path)?.kind !== undefined) &&
      ((from as Path)?.points ?? []).every(isPoint)
    );
  }

  const pathOpen = parsimmon
    .seqObj<HasPoints>(
      parsimmon.string("[").skip(whitespace),
      ["points", pointParser.sepBy1(parsimmon.string(",").skip(whitespace))],
      parsimmon.string("]").skip(whitespace),
    )
    .map<Path>((p) => ({ kind: PathKind.Open, points: p.points }));

  const pathClosedParens = parsimmon
    .seqObj<HasPoints>(
      parsimmon.string("(").skip(whitespace),
      ["points", pointParser.sepBy1(parsimmon.string(",").skip(whitespace))],
      parsimmon.string(")").skip(whitespace),
    )
    .map<Path>((p) => ({ kind: PathKind.Closed, points: p.points }));
  const pathClosed = parsimmon
    .seqObj<HasPoints>(
      parsimmon.optWhitespace,
      ["points", pointParser.sepBy1(parsimmon.string(",").skip(whitespace))],
      parsimmon.optWhitespace,
    )
    .map<Path>((p) => ({ kind: PathKind.Closed, points: p.points }));

  const pathParser = parsimmon.alt(pathOpen, pathClosedParens, pathClosed);

  /**
   * Parse postgres string representation of a path.
   */
  export function parsePath(from: unknown) {
    if (typeof from === "string") {
      return pathParser.tryParse(from);
    }
    if (isPath(from)) {
      return from;
    }
    return null;
  }

  /**
   * Serialize a path to postgres text format.
   */
  export function serializePath(x: unknown) {
    const path = x as Path;
    if (path === undefined || path === null) return null;
    if (path.kind === PathKind.Closed) {
      return `(${path.points.map(serializePoint).join(",")})`;
    } else {
      return `[${path.points.map(serializePoint).join(",")}]`;
    }
  }

  export type Polygon = HasPoints;
  /**
   * Parse postgres string representationo of a polygon.
   */
  export function parsePolygon(from: unknown) {
    if (typeof from === "string") {
      const path = pathParser.tryParse(from);
      return {
        points: path.points,
      };
    }
    if (isPath(from)) {
      return {
        points: from.points,
      };
    }
    return null;
  }

  /**
   * Serialize polygon to postgres text format.
   */
  export function serializePolygon(x: unknown) {
    const path = x as Polygon;
    if (path === undefined || path === null) return null;
    return serializePath({
      kind: PathKind.Closed,
      points: path.points,
    });
  }
}

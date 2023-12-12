import { arrayAttribute, parseEscapedArrayValue } from "@embracesql/shared";

describe("The array parser", () => {
  it("can parse an escape", () => {
    // beware the javascript escaping too
    expect(parseEscapedArrayValue.tryParse(String.raw`\\`)).toBe("\\");
    expect(parseEscapedArrayValue.tryParse(String.raw`\"`)).toBe('"');
    expect(parseEscapedArrayValue.tryParse(String.raw`\{`)).toBe("{");
    expect(parseEscapedArrayValue.tryParse(String.raw`\}`)).toBe("}");
    expect(parseEscapedArrayValue.tryParse(String.raw`\,`)).toBe(",");
  });

  it("can parse a null", () => {
    expect(arrayAttribute.tryParse("{NULL,NULL}")).toEqual([null, null]);
  });

  it("can parse a bare string", () => {
    expect(arrayAttribute.tryParse(`{hello,world}`)).toEqual([
      "hello",
      "world",
    ]);
  });

  it("can parse a quoted string", () => {
    expect(arrayAttribute.tryParse(`{"hello world",🌎}`)).toEqual([
      "hello world",
      "🌎",
    ]);
  });

  it("can parse a quoted field with escapes", () => {
    // this is a little tricky given that JS uses \ as escap
    expect(arrayAttribute.tryParse(String.raw`{"\\\"{},"}`)).toEqual([
      String.raw`\"{},`,
    ]);
  });

  it("can parse a bare string with complete escaping", () => {
    expect(arrayAttribute.tryParse(String.raw`{\\\"\{\}\,}`)).toEqual([
      String.raw`\"{},`,
    ]);
  });
  it("can not parse a bare string with separators", () => {
    expect(() => arrayAttribute.tryParse(String.raw`{`)).toThrow();
    expect(() => arrayAttribute.tryParse(String.raw`}`)).toThrow();
    expect(() => arrayAttribute.tryParse(String.raw`,`)).toThrow();
  });
});

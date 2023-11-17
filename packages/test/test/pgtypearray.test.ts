import {
  arrayAttribute,
  escaped,
} from "@embracesql/core/src/generator/pgtype/pgtypearray";

describe("The array parser", () => {
  it("can parse an escape", () => {
    // beware the javascript escaping too
    expect(escaped.tryParse(String.raw`\\`)).toBe("\\");
    expect(escaped.tryParse(String.raw`\"`)).toBe('"');
    expect(escaped.tryParse(String.raw`\{`)).toBe("{");
    expect(escaped.tryParse(String.raw`\}`)).toBe("}");
    expect(escaped.tryParse(String.raw`\,`)).toBe(",");
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

  it.skip("can split a record array", () => {
    // TODO context free way to check this parse
    /*
    const sample = String.raw`{"(\"howdy y'all\",\"2022-07-02 09:35:31.966868+00\")"}`;
    expect(context.types.api__echo_type.parse(sample)).toEqual([
      {
        echomessage: "howdy y'all",
        at: new Date("2022-07-02 09:35:31.966868+00"),
      },
    ]);
    */
  });
});

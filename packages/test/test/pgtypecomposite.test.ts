import {
  compositeAttribute,
  escaped,
} from "@embracesql/core/src/generator/pgtype/pgtypecomposite";

describe("The composite parser", () => {
  it("can parse an escape", () => {
    // beware the javascript escaping too
    expect(escaped.tryParse(String.raw`\\`)).toBe("\\");
    expect(escaped.tryParse(String.raw`\"`)).toBe('"');
    expect(escaped.tryParse(String.raw`\(`)).toBe("(");
    expect(escaped.tryParse(String.raw`\)`)).toBe(")");
    expect(escaped.tryParse(String.raw`\,`)).toBe(",");
  });

  it("can parse a null", () => {
    expect(compositeAttribute.tryParse("")).toBeNull();
  });

  it("can parse a bare string", () => {
    expect(compositeAttribute.tryParse("hello world!")).toBe("hello world!");
  });

  it("can parse a quoted string with separators", () => {
    expect(compositeAttribute.tryParse(`"(,)"`)).toBe("(,)");
  });

  it("can parse a quoted field with escapes", () => {
    // this is a little tricky given that JS uses \ as escap
    expect(compositeAttribute.tryParse(String.raw`"\\\""`)).toBe(
      String.raw`\"`,
    );
  });

  it("can parse a bare string with complete escaping", () => {
    expect(compositeAttribute.tryParse(String.raw`\\\(\)\,\"`)).toBe(
      String.raw`\(),"`,
    );
  });
  it("can not parse a bare string with separators", () => {
    expect(() => compositeAttribute.tryParse(String.raw`(`)).toThrow();
    expect(() => compositeAttribute.tryParse(String.raw`)`)).toThrow();
    expect(() => compositeAttribute.tryParse(String.raw`,`)).toThrow();
  });

  it("can parse nested array", () => {
    const sample = String.raw`"{""(\\""howdy y'all\\"",\\""2022-07-02 10:13:05.840209+00\\"")""}"`;
    expect(compositeAttribute.tryParse(sample)).toEqual(
      `{"(\\"howdy y'all\\",\\"2022-07-02 10:13:05.840209+00\\")"}`,
    );
  });
});

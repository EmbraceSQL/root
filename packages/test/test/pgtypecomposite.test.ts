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

  it.skip("can split a record", () => {
    // TODO: work without a context
    /*
    // sample value pulled from a debugger run calling api.echo_table
    const sample = `("howdy y'all","2022-06-30 21:16:16.374389+00")`;
    expect(context.types.api_echo_type.parse(sample)).toEqual({
      echomessage: "howdy y'all",
      at: new Date("2022-06-30 21:16:16.374389+00"),
    });
    */
  });
  it.skip("can split a nested array record", () => {
    // TODO: work without a context
    // sample valeus from api.echo_type_nested
    /*
    const sample = String.raw`("{""(\\""howdy y'all\\"",\\""2022-07-02 10:13:05.840209+00\\"")""}")`;
    interface HasEchoes {
      echoes: any[];
    }
    expect(
      (context.types.api_echo_type_nested.parse(sample) as HasEchoes).echoes
    ).toEqual([
      {
        echomessage: "howdy y'all",
        at: new Date("2022-07-02 10:13:05.840209+00"),
      },
    ]);
    */
  });
});

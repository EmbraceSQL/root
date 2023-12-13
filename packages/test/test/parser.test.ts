import { commaSeparatedNumbers } from "@embracesql/shared";

describe("Parsers can", () => {
  it("parse a number list", () => {
    expect([1, 2, 3]).toMatchObject(commaSeparatedNumbers.tryParse("1,2,3"));
    expect([1.1, 2, 3]).toMatchObject(
      commaSeparatedNumbers.tryParse("1.1,2,3"),
    );
  });
});

import { Public, Scripts } from "../src/dvdrental";

describe("EmbraceSQL can", () => {
  it("describe table column metadata", () => {
    expect(Public.Tables.Actor.ColumnNames.length).toBe(4);
    Public.Tables.Actor.ColumnNames.forEach((c) => {
      expect(Public.Tables.Actor.FieldNames).toContain(
        Public.Tables.Actor.Columns[c].fieldName,
      );
    });
  });
  it("describe script result column metadata", () => {
    expect(Scripts.MovieListing.ColumnNames.length).toBe(5);
    Scripts.MovieListing.ColumnNames.forEach((c) => {
      expect(Scripts.MovieListing.FieldNames).toContain(
        Scripts.MovieListing.Columns[c].fieldName,
      );
    });
  });
  it("describe procedure result column metadata", () => {
    expect(Public.Procedures.RewardsReport.ColumnNames.length).toBe(10);
    Public.Procedures.RewardsReport.ColumnNames.forEach((c) => {
      expect(Public.Procedures.RewardsReport.FieldNames).toContain(
        Public.Procedures.RewardsReport.Columns[c].fieldName,
      );
    });
  });
});

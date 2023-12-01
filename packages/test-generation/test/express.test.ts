import { EmbraceSQLExpressApp } from "../src/express/dvdrental";
import { EmbraceSQLRequest } from "@embracesql/shared";
import request from "supertest";

describe("EmbraceSQLExpress can", () => {
  it("serve a default operation", async () => {
    const req: EmbraceSQLRequest<object> = {
      operation: "Public.LastDay",
      parameters: {
        _0: new Date("12/1/2023"),
      },
    };
    const app = await EmbraceSQLExpressApp(
      "postgres://postgres:postgres@localhost:5432/dvdrental",
    );
    const res = await request(app)
      .post("/")
      .set("Content-Type", "application/json")
      .send(req);
    expect(res.body).toMatchObject({
      operation: "Public.LastDay",
      results: "2023-12-31T00:00:00.000Z",
    });
  });
});

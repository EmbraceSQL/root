import { EmbraceSQLExpress } from "../src";
import { EmbraceSQLRequest } from "@embracesql/shared";
import request from "supertest";

describe("EmbraceSQLExpress can", () => {
  it("serve a default operation", async () => {
    const req: EmbraceSQLRequest<object> = {
      operation: "hello",
      parameters: {},
    };
    const res = await request(
      EmbraceSQLExpress({
        dispatch: async (request) => {
          console.assert(request);
          return {};
        },
      }),
    )
      .post("/")
      .set("Content-Type", "application/json")
      .send(req);
    expect(res.body).toMatchObject({ operation: "hello", results: {} });
  });
  it("reject invalid body that is not json", async () => {
    const res = await request(EmbraceSQLExpress()).post("/").send("junk");
    expect(res.status).toBe(400);
  });
});

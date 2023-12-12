import { EmbraceSQLExpress } from "@embracesql/express";
import { EmbraceSQLRequest } from "@embracesql/shared";
import request from "supertest";

describe("EmbraceSQL Express can", () => {
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

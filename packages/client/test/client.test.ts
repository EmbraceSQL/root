import { EmbraceSQLClient } from "../src";

describe("EmbraceSQL can", () => {
  // all requests are going to be mocked
  it("connect via client", async () => {
    const client = new EmbraceSQLClient({ url: "http://localhost" });
    expect(client).toBeDefined();
  });
});

import { EmbraceSQLClient } from "../src";
import fetch from "jest-fetch-mock";

describe("EmbraceSQL can", () => {
  beforeAll(() => {
    fetch.enableMocks();
  });
  beforeEach(() => {
    fetch.resetMocks();
  });

  // all requests are going to be mocked
  it("connect via client", async () => {
    fetch.mockResponseOnce(
      JSON.stringify({
        operation: "hello",
        results: "world",
      }),
    );
    const client = new EmbraceSQLClient({ url: "http://localhost" });
    expect(client).toBeDefined();
    const response = await client.invoke<unknown, unknown, string>({
      operation: "hello",
      parameters: {},
      values: {},
    });
    expect(response).toMatchObject({ operation: "hello", results: "world" });
  });
});

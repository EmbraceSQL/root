import { EmbraceSQLClient } from "@embracesql/client";
import fetch from "jest-fetch-mock";

describe("EmbraceSQLClient can", () => {
  beforeAll(() => {
    fetch.enableMocks();
  });
  beforeEach(() => {
    fetch.resetMocks();
  });

  // all requests are going to be mocked
  it("connect", async () => {
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
      options: {},
    });
    expect(response).toMatchObject({ operation: "hello", results: "world" });
  });
});

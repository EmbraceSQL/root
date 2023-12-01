/**
 * @jest-environment jsdom
 */
import {
  EmbraceSQLClient,
  EmbraceSQLProvider,
  useEmbraceSQLClient,
} from "../src";
import { renderHook } from "@testing-library/react";
import React from "react";

type WithChildren = {
  children: React.ReactNode;
};

describe("EmbraceSQL React can", () => {
  it("hook a context", async () => {
    const client = new EmbraceSQLClient({ url: "http://localhost" });
    const wrapper = ({ children }: WithChildren) => (
      <EmbraceSQLProvider client={client}>{children}</EmbraceSQLProvider>
    );
    const { result } = renderHook(() => useEmbraceSQLClient(), { wrapper });
    expect(result.current).toBe(client);
  });
});

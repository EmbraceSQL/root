/**
 * @jest-environment jsdom
 */
import {
  EmbraceSQLClient,
  EmbraceSQLProvider,
  Public,
} from "../src/dvdrental-react";
import { renderHook, waitFor } from "@testing-library/react";
import fetch from "jest-fetch-mock";
import React from "react";

type WithChildren = {
  children: React.ReactNode;
};

describe("EmbraceSQL Hooks can", () => {
  beforeAll(() => {
    fetch.enableMocks();
  });
  beforeEach(() => {
    fetch.resetMocks();
  });

  // all requests are going to be mocked
  it("read a single record", async () => {
    // given mocking of the EmbraceSQL HTTP/S server via fetch
    const mockActor = {
      actorId: 1,
      firstName: "Penelope",
      lastName: "Guiness",
    };
    fetch.mockResponseOnce(
      JSON.stringify({
        operation: "Public.Actor.byActorid",
        results: mockActor,
      }),
    );
    const client = new EmbraceSQLClient({ url: "http://localhost" });
    const wrapper = ({ children }: WithChildren) => (
      <EmbraceSQLProvider client={client}>{children}</EmbraceSQLProvider>
    );
    const { result } = renderHook(
      () => Public.Tables.Actor.useByActorId({ actorId: 1 }),
      { wrapper },
    );
    await waitFor(() => expect(result.current?.loading).toBe(true));
    await waitFor(() => expect(result.current?.loading).toBe(false));
    await waitFor(() =>
      expect(result.current?.results).toMatchObject(mockActor),
    );
  });
  it("update a single record", async () => {
    // given mocking of the EmbraceSQL HTTP/S server via fetch
    const mockActor = {
      actorId: 1,
      firstName: "Penelope",
      lastName: "Guiness",
    };
    fetch.mockResponseOnce(
      JSON.stringify({
        operation: "Public.Actor.byActorid",
        results: mockActor,
      }),
    );
    const client = new EmbraceSQLClient({ url: "http://localhost" });
    const wrapper = ({ children }: WithChildren) => (
      <EmbraceSQLProvider client={client}>{children}</EmbraceSQLProvider>
    );
    // here is the intercepted record
    const { result } = renderHook(
      () => Public.Tables.Actor.useByActorId({ actorId: 1 }),
      { wrapper },
    );
    await waitFor(() =>
      expect(result.current?.results).toMatchObject(mockActor),
    );
    // intercepted record will update the database -- set up a mock
    const updatedMockActor = {
      actorId: 1,
      firstName: "Alec",
      lastName: "Guiness",
    };
    fetch.mockResponseOnce(
      JSON.stringify({
        operation: "Public.Actor.create",
        results: updatedMockActor,
      }),
    );
    result.current.results!.firstName = "Alec";
    await waitFor(() =>
      expect(result.current?.results).toMatchObject(updatedMockActor),
    );
  });
});

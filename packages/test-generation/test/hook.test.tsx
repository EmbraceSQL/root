/**
 * @jest-environment jsdom
 */
import {
  EmbraceSQLClient,
  EmbraceSQLProvider,
  Public,
} from "../src/dvdrental-react";
import { fireEvent, render, renderHook, waitFor } from "@testing-library/react";
import fetch from "jest-fetch-mock";
import React from "react";

type WithChildren = {
  children: React.ReactNode;
};

describe("EmbraceSQL Hooks can", () => {
  const client = new EmbraceSQLClient({ url: "http://localhost" });
  const mockActor = {
    actorId: 1,
    firstName: "Penelope",
    lastName: "Guiness",
  };
  const updatedMockActor = {
    actorId: 1,
    firstName: "Alec",
    lastName: "Guiness",
  };
  beforeAll(() => {
    fetch.enableMocks();
  });
  beforeEach(() => {
    // we'll have an initial value of an actor
    // given mocking of the EmbraceSQL HTTP/S server via fetch
    fetch.mockResponseOnce(
      JSON.stringify({
        operation: "Public.Actor.byActorid.read",
        results: mockActor,
      }),
    );
    fetch.mockResponseOnce(
      JSON.stringify({
        operation: "Public.Actor.create",
        results: updatedMockActor,
      }),
    );
  });
  afterEach(() => {
    fetch.resetMocks();
  });

  // all requests are going to be mocked
  it("read a single record", async () => {
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
    const wrapper = ({ children }: WithChildren) => (
      <EmbraceSQLProvider client={client}>{children}</EmbraceSQLProvider>
    );
    const { result } = renderHook(
      () => Public.Tables.Actor.useByActorId({ actorId: 1 }),
      { wrapper },
    );
    await waitFor(() =>
      expect(result.current?.results).toMatchObject(mockActor),
    );
    // intercepted record will update the database -- set up a mock

    result.current.results!.firstName = "Alec";
    await waitFor(() =>
      expect(result.current?.results).toMatchObject(updatedMockActor),
    );
  });
  it("update a single record via change event", async () => {
    const wrapper = ({ children }: WithChildren) => (
      <EmbraceSQLProvider client={client}>{children}</EmbraceSQLProvider>
    );
    const { result } = renderHook(
      () => Public.Tables.Actor.useByActorId({ actorId: 1 }),
      { wrapper },
    );
    await waitFor(() =>
      expect(result.current?.results).toMatchObject(mockActor),
    );
    const actor = result.current?.results;
    const rendered = render(
      <input value={actor?.firstName} onChange={actor?.changeFirstName} />,
    );
    fireEvent.change(rendered.getByRole("textbox"), {
      target: { value: "Alec" },
    });
    // this should have tapped the server in the change handler
    // causing the hook to update
    await waitFor(() =>
      expect(result.current?.results).toMatchObject(updatedMockActor),
    );
  });
});

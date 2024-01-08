/**
 * @jest-environment jsdom
 */
import { Database, EmbraceSQLExpressApp } from "../src/dvdrental-express";
import {
  EmbraceSQLClient,
  EmbraceSQLProvider,
  Public,
} from "../src/dvdrental-react";
import {
  fireEvent,
  render,
  renderHook,
  waitFor,
  act,
} from "@testing-library/react";
import { Express } from "express";
import { Server } from "http";
import fetch from "node-fetch";
import React from "react";
import { setImmediate, clearImmediate } from "timers";
import { TextEncoder, TextDecoder } from "util";

Object.assign(global, {
  TextDecoder,
  TextEncoder,
  fetch,
  setImmediate,
  clearImmediate,
});

type WithChildren = {
  children: React.ReactNode;
};

describe("EmbraceSQL Hooks can", () => {
  const client = new EmbraceSQLClient({ url: "http://localhost:4444" });
  let app: Express;
  let server: Server;
  let database: Database;
  let databaseInTransaction: Awaited<ReturnType<Database["beginTransaction"]>>;
  beforeAll(async () => {
    const postgresUrl = "postgres://postgres:postgres@localhost:5432/dvdrental";
    database = await Database.connect(postgresUrl, {
      max: 1,
    });
    databaseInTransaction = await database.beginTransaction();
    // going to set up a transacted database
    app = await EmbraceSQLExpressApp(
      "postgres://postgres:postgres@localhost:5432/dvdrental",
      databaseInTransaction.database,
    );
    return new Promise<void>((resolve) => {
      server = app.listen(4444, () => {
        resolve();
      });
    });
  });
  afterAll(async () => {
    // transactional testing, database will restore to initial state
    databaseInTransaction.rollback();
    await database.disconnect();
    return new Promise<void>((resolve) => {
      server.close(() => resolve());
    });
  });

  // all requests are going to be mocked
  it("read a single row", async () => {
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
      expect(result.current?.results).toMatchObject({
        firstName: "Penelope",
        lastName: "Guiness",
      }),
    );
  });
  it("update a single row", async () => {
    const wrapper = ({ children }: WithChildren) => (
      <EmbraceSQLProvider client={client}>{children}</EmbraceSQLProvider>
    );
    const { result } = renderHook(
      () => Public.Tables.Actor.useByActorId({ actorId: 1 }),
      { wrapper },
    );
    await waitFor(() => expect(result.current?.loading).toBe(false));
    // intercepted row will update the database -- set up a mock
    act(() => {
      result.current.results!.firstName = "Alec";
    });
    await waitFor(() =>
      expect(result.current?.results).toMatchObject({
        firstName: "Alec",
        lastName: "Guiness",
      }),
    );
  });
  it("update a single row via change event", async () => {
    const wrapper = ({ children }: WithChildren) => (
      <EmbraceSQLProvider client={client}>{children}</EmbraceSQLProvider>
    );
    const { result } = renderHook(
      () => Public.Tables.Actor.useByActorId({ actorId: 1 }),
      { wrapper },
    );
    await waitFor(() => expect(result.current?.loading).toBe(false));
    const actor = result.current?.results;
    const rendered = render(
      <input value={actor?.firstName} onChange={actor?.changeFirstName} />,
    );
    act(() => {
      fireEvent.change(rendered.getByRole("textbox"), {
        target: { value: "Alec" },
      });
    });
    // this should have tapped the server in the change handler
    // causing the hook to update
    await waitFor(() =>
      expect(result.current?.results).toMatchObject({
        firstName: "Alec",
        lastName: "Guiness",
      }),
    );
  });
  it("read all rows", async () => {
    const wrapper = ({ children }: WithChildren) => (
      <EmbraceSQLProvider client={client}>{children}</EmbraceSQLProvider>
    );
    const { result } = renderHook(() => Public.Tables.Actor.useRows(), {
      wrapper,
    });
    await waitFor(() => expect(result.current?.loading).toBe(false));
    await waitFor(() =>
      expect(result.current?.results?.length).toBeGreaterThan(100),
    );
  });
  it("add a row to read rows", async () => {
    const wrapper = ({ children }: WithChildren) => (
      <EmbraceSQLProvider client={client}>{children}</EmbraceSQLProvider>
    );
    const { result } = renderHook(() => Public.Tables.Actor.useRows(), {
      wrapper,
    });
    await waitFor(() => expect(result.current?.loading).toBe(false));
    // when we add a row
    const added = await result.current.addRow();
    // and set some values as if a user edited them
    // just updating the row members should be enough to save
    act(() => {
      added.firstName = "New";
      added.lastName = "Hope";
    });
    // then the database should have allocated a new id
    await waitFor(() => expect(added.actorId).toBeGreaterThan(0));
    // and the database should know this record
    const shouldBeAdded =
      await client.Public.Tables.Actor.ByPrimaryKey.read(added);
    // and this is a proper date last update stamp
    expect(shouldBeAdded!.lastUpdate.valueOf()).toBeLessThan(Date.now());
  });
  it("delete a row from read rows", async () => {
    const wrapper = ({ children }: WithChildren) => (
      <EmbraceSQLProvider client={client}>{children}</EmbraceSQLProvider>
    );
    const { result } = renderHook(() => Public.Tables.Actor.useRows(), {
      wrapper,
    });
    await waitFor(() => expect(result.current?.loading).toBe(false));
    // when we add a row
    const added = await result.current.addRow();
    // and set some values as if a user edited them
    // just updating the row members should be enough to save
    act(() => {
      added.firstName = "New";
      added.lastName = "Hope";
    });
    // and wait for the row to be saved
    await waitFor(() => expect(added.actorId).toBeGreaterThan(0));
    // and then delete a row
    await result.current.deleteRow(added);
    // the the database should no longer know this record
    const shouldBeDeleted =
      await client.Public.Tables.Actor.ByActorId.read(added);
    // and this is a proper date last update stamp
    expect(shouldBeDeleted).toBeUndefined();
  });
});

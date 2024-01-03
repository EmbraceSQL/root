import { DebounceMap } from "@embracesql/shared";

describe("Debounce can", () => {
  it("debounce a function by key", async () => {
    const map = new DebounceMap();
    const calls = {
      hi: 0,
      bye: 0,
    };
    [1, 2, 3].forEach(() => {
      map.register("hi", async () => {
        calls.hi = calls.hi + 1;
      });
    });
    [1, 2, 3, 4, 5].forEach(() => {
      map.register("bye", async () => {
        calls.bye = calls.bye + 1;
      });
    });
    // wait long enough for a couple debounces
    await new Promise((resolve) => {
      setTimeout(resolve, 600);
    });
    expect(calls.hi).toBe(1);
    expect(calls.bye).toBe(1);
  });
  it("debounce a function with no key", async () => {
    const map = new DebounceMap();
    let calls = 0;
    map.register("", async () => {
      calls = calls + 1;
    });
    map.register("", async () => {
      calls = calls + 1;
    });
    // wait long enough for a couple debounces
    await new Promise((resolve) => {
      setTimeout(resolve, 600);
    });
    expect(calls).toBe(2);
  });
});

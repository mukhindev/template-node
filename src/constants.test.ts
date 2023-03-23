import { describe, it, expect } from "vitest";
import { MODE } from "./constants.js";

describe("Default constants", () => {
  it("MODE", () => {
    expect(MODE).toBe("test");
  });
});

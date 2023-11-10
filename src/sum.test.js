import { expect, test } from "vitest";
import sum from "./sum";

test("1 + 2", () => {
  const result = sum(1, 2);

  expect(result).toEqual(3);
});

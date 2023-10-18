const { expect } = require("@jest/globals");
import { sum } from "../sum";

test("Should calculate the sum of two function", () => {
  const result = sum(5, 8);
  expect(result).toBe(13);
});

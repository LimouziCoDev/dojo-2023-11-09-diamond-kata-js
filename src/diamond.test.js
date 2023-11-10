import { expect, test } from "vitest";
import imprimer_diamant from "./diamond";

test("generer diamant", () => {
  const result = imprimer_diamant("C");

  expect(result).toBe(`  A  
 B B 
C   C
 B B 
  A  `);
});

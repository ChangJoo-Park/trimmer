import { assertEquals } from "./deps.ts";
import { isDecimal } from "./is_decimal.ts";

Deno.test("Empty String is decimal", () => {
  assertEquals(isDecimal(""), true);
});

Deno.test("Space is not decimal", () => {
  assertEquals(isDecimal(" "), false);
});

Deno.test("Lowercase letters is not decimal", () => {
  assertEquals(isDecimal("abcdefghijklmnopqrstuvwxyz"), false);
});

Deno.test("Uppercase letters is not decimal", () => {
  assertEquals(isDecimal("ABCDEFGHIJKLMNOPQRSTUVWXYZ"), false);
});

Deno.test("10 is decimal", () => {
  assertEquals(isDecimal("10"), true);
});

Deno.test("10.0 is decimal", () => {
  assertEquals(isDecimal("10.0"), true);
});

Deno.test("-10 is decimal", () => {
  assertEquals(isDecimal("-10"), true);
});

Deno.test("-10.0 is decimal", () => {
  assertEquals(isDecimal("-10.0"), true);
});

Deno.test("10. is decimal", () => {
  assertEquals(isDecimal("10."), false);
});

Deno.test("10. is decimal", () => {
  assertEquals(isDecimal("-10."), false);
});

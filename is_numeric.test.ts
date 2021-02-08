import { assertEquals } from "./deps.ts";
import { isNumeric } from "./is_numeric.ts";

Deno.test("Empty String is numeric", () => {
  assertEquals(isNumeric(""), true);
});

Deno.test("Space is not numeric", () => {
  assertEquals(isNumeric(" "), false);
});

Deno.test("Lowercase letters is not numeric", () => {
  assertEquals(isNumeric("abcdefghijklmnopqrstuvwxyz"), false);
});

Deno.test("Uppercase letters is not numeric", () => {
  assertEquals(isNumeric("ABCDEFGHIJKLMNOPQRSTUVWXYZ"), false);
});

Deno.test("10 is numeric", () => {
  assertEquals(isNumeric("10"), true);
});

Deno.test("10.0 is not numeric", () => {
  assertEquals(isNumeric("10.0"), false);
});

Deno.test("-10 is not numeric", () => {
  assertEquals(isNumeric("-10"), false);
});

Deno.test("-10.0 is not numeric", () => {
  assertEquals(isNumeric("-10.0"), false);
});

Deno.test("10. is not numeric", () => {
  assertEquals(isNumeric("10."), false);
});

Deno.test("10. is not numeric", () => {
  assertEquals(isNumeric("-10."), false);
});

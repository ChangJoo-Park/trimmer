import { assertEquals } from "./deps.ts";
import { isInteger } from "./is_integer.ts";

Deno.test("Empty String is integer", () => {
  assertEquals(isInteger(""), true);
});

Deno.test("Space is not integer", () => {
  assertEquals(isInteger(" "), false);
});

Deno.test("Lowercase letters is not integer", () => {
  assertEquals(isInteger("abcdefghijklmnopqrstuvwxyz"), false);
});

Deno.test("Uppercase letters is not integer", () => {
  assertEquals(isInteger("ABCDEFGHIJKLMNOPQRSTUVWXYZ"), false);
});

Deno.test("10 is integer", () => {
  assertEquals(isInteger("10"), true);
});

Deno.test("10.0 is not integer", () => {
  assertEquals(isInteger("10.0"), false);
});

Deno.test("-10 is not integer", () => {
  assertEquals(isInteger("-10"), true);
});

Deno.test("-10.0 is not integer", () => {
  assertEquals(isInteger("-10.0"), false);
});

Deno.test("10. is not integer", () => {
  assertEquals(isInteger("10."), false);
});

Deno.test("10. is not integer", () => {
  assertEquals(isInteger("-10."), false);
});

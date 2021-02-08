import { assertEquals } from "./deps.ts";
import { isAlpha } from "./is_alpha.ts";

Deno.test("Empty String is alpha", () => {
  assertEquals(isAlpha(""), true);
});

Deno.test("HelloWorld is alpha", () => {
  assertEquals(isAlpha("HelloWorld"), true);
});

Deno.test("12345 is not alpha", () => {
  assertEquals(isAlpha("12345"), false);
});

Deno.test("space is not alpha", () => {
  assertEquals(isAlpha(" "), false);
});

Deno.test("Sentence with space is not alpha", () => {
  assertEquals(isAlpha("Hello World"), false);
});

Deno.test("Lowercase all letters are alpha", () => {
  assertEquals(isAlpha("abcdefghijklmnopqrstuvwxyz"), true);
});

Deno.test("Uppercase all letters are alpha", () => {
  assertEquals(isAlpha("ABCDEFGHIJKLMNOPQRSTUVWXYZ"), true);
});

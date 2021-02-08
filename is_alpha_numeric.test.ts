import { assertEquals } from "./deps.ts";
import { isAlphaNumeric } from "./is_alpha_numeric.ts";

Deno.test("Empty String is alpha numeric", () => {
  assertEquals(isAlphaNumeric(""), true);
});

Deno.test("HelloWorld is alpha numeric", () => {
  assertEquals(isAlphaNumeric("HelloWorld"), true);
});

Deno.test("12345 is alpha numeric", () => {
  assertEquals(isAlphaNumeric("12345"), true);
});

Deno.test("Hello12345 is alpha numeric", () => {
  assertEquals(isAlphaNumeric("Hello12345"), true);
});

Deno.test("space is not alpha numeric", () => {
  assertEquals(isAlphaNumeric(" "), false);
});

Deno.test("Sentence with space is not alpha numeric", () => {
  assertEquals(isAlphaNumeric("Hello World 12345"), false);
});

Deno.test("Lowercase all letters are alpha numeric", () => {
  assertEquals(isAlphaNumeric("abcdefghijklmnopqrstuvwxyz"), true);
});

Deno.test("Uppercase all letters are alpha numeric", () => {
  assertEquals(isAlphaNumeric("ABCDEFGHIJKLMNOPQRSTUVWXYZ"), true);
});

Deno.test("Lowercase all letters with numbers are alpha numeric", () => {
  assertEquals(isAlphaNumeric("abcdefghijklmnopqrstuvwxyz1234567890"), true);
});

Deno.test("Uppercase all letters with numbers are alpha numeric", () => {
  assertEquals(isAlphaNumeric("ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"), true);
});

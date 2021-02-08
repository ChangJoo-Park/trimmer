import { assertEquals } from "./deps.ts";
import hasLength from "./has_length.ts";

Deno.test("Array has length", () => assertEquals(hasLength([]), true));
Deno.test("Empty String has length", () => assertEquals(hasLength(''), true));
Deno.test("String has length", () => assertEquals(hasLength('Hello World'), true));

Deno.test("Object does not have length", () => assertEquals(hasLength({}), false));
Deno.test("Object.entries does not have length", () => assertEquals(hasLength(Object.entries({})), true));
Deno.test("Object.values does not have length", () => assertEquals(hasLength(Object.values({})), true));
Deno.test("Object.keys does not have length", () => assertEquals(hasLength(Object.keys({})), true));

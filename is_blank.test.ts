import { assertEquals } from "./deps.ts";
import { isBlank } from "./is_blank.ts";

Deno.test("empty string is blank", () => assertEquals(isBlank(""), true));

Deno.test("empty Array is blank", () => assertEquals(isBlank([]), true));

Deno.test("Object with no keys is blank", () =>
  assertEquals(isBlank({}), true));

Deno.test('\"Hello World\" string is not blank', () =>
  assertEquals(isBlank("Hello World"), false));

Deno.test("filled Array is blank", () =>
  assertEquals(isBlank([1, 2, 3, 4]), false));

Deno.test("Object with no keys is blank", () =>
  assertEquals(isBlank({ message: "I am not blank object" }), false));

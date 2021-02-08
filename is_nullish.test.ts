import { assertEquals } from "./deps.ts";
import isNullish from "./is_nullish.ts";

// Test isNullish
// * - 0,
// * - ''
// * - NaN
// * - null
// * - undefined
Deno.test('0 is Nullish', () => assertEquals(isNullish(0), true))
Deno.test('NaN is Nullish', () => assertEquals(isNullish(NaN), true))
Deno.test('null is Nullish', () => assertEquals(isNullish(null), true))
Deno.test('undefined is Nullish', () => assertEquals(isNullish(undefined), true))
Deno.test('\"0\" is Not Nullish. It is string', () => assertEquals(isNullish('0'), false))
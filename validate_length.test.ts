import { assertEquals } from "./deps.ts";
import { validateLength } from './validate_length.ts';

Deno.test('Validate Length name Park is 4 characters', () => {
  assertEquals(validateLength('Park', { is: 4 }), true)
})

Deno.test('Validate Length name Park is not 5 characters', () => {
  assertEquals(validateLength('Park', { is: 5 }), false)
})

Deno.test('Hello World is more than 0', () => {
  assertEquals(validateLength('Hello World', { minimum: 0 }), true)
})

Deno.test('Hello World is less than 20', () => {
  assertEquals(validateLength('Hello World', { maximum: 20 }), true)
})

Deno.test('Hello World is 11', () => {
  assertEquals(validateLength('Hello World', { is: 11 }), true)
})

Deno.test('Hello World is more than 0, less than 12', () => {
  assertEquals(validateLength('Hello World', { minimum: 0, maximum: 12 }), true)
})
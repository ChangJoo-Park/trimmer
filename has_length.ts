// deno-lint-ignore no-explicit-any
export default function hasLength(value: any): boolean {
  const isArray = Array.isArray(value);
  const isString = typeof value === "string";

  return isArray || isString
}

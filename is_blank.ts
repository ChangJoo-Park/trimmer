// deno-lint-ignore no-explicit-any
export default function isBlank(value: any): boolean {
  const isArray = Array.isArray(value);
  const isString = typeof value === "string";
  const isObject = typeof value === "object" && value !== null;

  if (isArray) {
    return value.length === 0;
  }

  if (isString) {
    return value.length === 0;
  }

  if (isObject) {
    return Object.keys(value).length === 0;
  }
  return false;
}

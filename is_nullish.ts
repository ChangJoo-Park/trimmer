/**
 * Check value is Nullish
 *
 * List of Nullish
 * - 0,
 * - ''
 * - NaN
 * - null
 * - undefined
 */
// deno-lint-ignore no-explicit-any
export const isNullish = (value: any) => {
  return value === undefined || value === null || value === 0 || value === "" ||
    isNaN(value);
};

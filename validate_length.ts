import { hasLength } from "./has_length.ts";

interface LengthValidate {
  minimum: number;
  maximum: number;
}

interface MinimumLengthValidate {
  minimum: number;
}

interface MaximumLengthValidate {
  maximum: number;
}

interface ExactLengthValidate {
  is: number;
}

// deno-lint-ignore no-explicit-any
function isLengthValidate(options: any): options is LengthValidate {
  return "minimum" in options || "maximum" in options;
}

function isMinimumLengthValidate(
  // deno-lint-ignore no-explicit-any
  options: any,
): options is MinimumLengthValidate {
  const hasMinimum = "minimum" in options;
  const hasMaximum = "maximum" in options;
  return hasMinimum && !hasMaximum;
}

function isMaximumLengthValidate(
  // deno-lint-ignore no-explicit-any
  options: any,
): options is MaximumLengthValidate {
  const hasMinimum = "minimum" in options;
  const hasMaximum = "maximum" in options;
  return !hasMinimum && hasMaximum;
}

// deno-lint-ignore no-explicit-any
function isExactLengthValidate(options: any): options is ExactLengthValidate {
  return "is" in options;
}

export const validateLength = (
  // deno-lint-ignore no-explicit-any
  value: any,
  options:
    | LengthValidate
    | MinimumLengthValidate
    | MaximumLengthValidate
    | ExactLengthValidate,
): boolean => {
  if (!hasLength(value)) {
    return false;
  }
  const length = value.length;

  if (isExactLengthValidate(options)) {
    return length === options.is;
  }

  if (isMinimumLengthValidate(options)) {
    const { minimum } = options;
    return minimum < length;
  }

  if (isMaximumLengthValidate(options)) {
    const { maximum } = options;
    return maximum > length;
  }

  if (isLengthValidate(options)) {
    const length = value.length;
    const { minimum, maximum } = options;
    return minimum < length && maximum > length;
  }

  return false;
};

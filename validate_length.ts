import hasLength from "./has_length.ts";

export interface lengthValidate {
  minimum: number;
  maximum: number;
}

export interface minimumLengthValidate {
  minimum: number;
}

export interface maximumLengthValidate {
  maximum: number;
}

export interface exactLengthValidate {
  is: number;
}

// deno-lint-ignore no-explicit-any
function isLengthValidate(options: any): options is lengthValidate {
  return "minimum" in options || "maximum" in options;
}

function isMinimumLengthValidate(
  // deno-lint-ignore no-explicit-any
  options: any,
): options is minimumLengthValidate {
  const hasMinimum = "minimum" in options;
  const hasMaximum = "maximum" in options;
  return hasMinimum && !hasMaximum;
}

function isMaximumLengthValidate(
  // deno-lint-ignore no-explicit-any
  options: any,
): options is maximumLengthValidate {
  const hasMinimum = "minimum" in options;
  const hasMaximum = "maximum" in options;
  return !hasMinimum && hasMaximum;
}

// deno-lint-ignore no-explicit-any
function isExactLengthValidate(options: any): options is exactLengthValidate {
  return "is" in options;
}

export default function validateLength(
  // deno-lint-ignore no-explicit-any
  value: any,
  options:
    | lengthValidate
    | minimumLengthValidate
    | maximumLengthValidate
    | exactLengthValidate,
): boolean {
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
}

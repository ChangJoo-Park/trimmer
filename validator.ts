import { isBlank } from "./is_blank.ts";
import { isNullish } from "./is_nullish.ts";

// deno-lint-ignore no-explicit-any
declare function validateFunction(value: any): null | string;
// deno-lint-ignore no-explicit-any
declare function valueFunction(): any;

export enum ValidationType {
  presence,
  absence,
  uniqueness,
  length,
  numericality,
  accept,
  exclusion,
  inclusion,
  format,
}

export interface ValidationOption {
  type: ValidationType;
  value: typeof valueFunction;
  validate: typeof validateFunction;
  allowNullish?: boolean;
  allowBlank?: boolean;
}

export class ValidationError extends Error {}

export interface ValidateResult {
  // deno-lint-ignore no-explicit-any
  value: any;
  errors: ValidationError[];
}

/**
 * Validator
 */
export class Validator {
  private _errors: ValidationError[] = [];
  _options: ValidationOption;

  constructor(options: ValidationOption) {
    this._options = options;
  }

  validate(): ValidateResult {
    const value = this.options.value();
    const validateResult = this.options.validate(value);

    if (this.options.allowNullish === false && isNullish(value)) {
      this.errors.push(new ValidationError("Not allow nullish"));
    }

    if (this.options.allowBlank === false && isBlank(value)) {
      this.errors.push(new ValidationError("Not allow blank"));
    }

    if (validateResult !== null) {
      this._errors.push(new ValidationError(validateResult));
    }

    return { value, errors: this.errors };
  }

  get isValid(): boolean {
    this.validate();
    return this.errors.length === 0;
  }

  get isInvalid(): boolean {
    return !this.isValid;
  }

  get errors(): ValidationError[] {
    return this._errors;
  }

  get options(): ValidationOption {
    return this._options;
  }
}

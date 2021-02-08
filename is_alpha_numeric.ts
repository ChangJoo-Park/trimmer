export const isAlphaNumeric = (value: string) => {
  const regex = /^[a-zA-Z0-9]*$/;
  return regex.test(value);
};

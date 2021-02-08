export const isAlpha = (value: string) => {
  const regex = /^[a-zA-Z]*$/;
  return regex.test(value);
};

export const isDecimal = (value: string) => {
  const regex = /^[-]?\d*(\.\d+)?$/;
  return regex.test(value);
};

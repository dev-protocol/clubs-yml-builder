const validNumber = new RegExp(/^\d*\.?\d*$/);

export const isNumberInput = (str: string): boolean => {
  return validNumber.test(str);
};

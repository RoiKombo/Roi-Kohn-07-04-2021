export const convertTempUnit = (fahrenheit, value) => {
  if (fahrenheit) {
    const matric = Math.floor(value / 5) * 9 + 32;
    return matric;
  }
  return value;
};

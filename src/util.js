export const NUM_PRODUCTS = 10;

export function isEven(number) {
  return (number % 2) === 0;
}

export function isOdd(number) {
  return !isEven(number);
}

export default function isNumber(number) {
  return typeof number === 'number';
}


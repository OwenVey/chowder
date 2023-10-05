import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function numberToFraction(value: number, maxDenom = 10) {
  if (Number.isInteger(value)) return value;

  const wholeNumber = Math.trunc(value);
  if (wholeNumber > 0) {
    value = value - wholeNumber;
  }

  const best = { numerator: 1, denominator: 1, error: Math.abs(value - 1) };
  for (let denominator = 1; best.error > 0 && denominator <= maxDenom; denominator++) {
    const numerator = Math.round(value * denominator);
    const error = Math.abs(value - numerator / denominator);
    if (error >= best.error) continue;
    best.numerator = numerator;
    best.denominator = denominator;
    best.error = error;
  }

  return `${wholeNumber > 0 ? wholeNumber + ' ' : ''}${best.numerator}/${best.denominator}`;
}

export function toPercentage(value: number): string {
  return `${(value * 100).toFixed(2)}%`;
}

export function round(num: number, decimalPlaces = 2): number {
  return Number(num.toFixed(decimalPlaces));
}

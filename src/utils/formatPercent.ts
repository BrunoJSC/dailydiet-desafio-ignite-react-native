export function formattedPercent(value: number, total: number) {
  const percent = (value / total) * 100;
  const formatted = percent.toFixed(2).replace(".", ",");
  return `${formatted}%`;
}

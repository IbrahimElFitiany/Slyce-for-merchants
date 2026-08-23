const numberFormatter = new Intl.NumberFormat("en-US");
const decimalFormatter = new Intl.NumberFormat("en-US", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

export function formatNumber(value?: number | string | null): string {
  if (value === undefined || value === null) return "—";
  const num = typeof value === "string" ? Number(value) : value;
  if (Number.isNaN(num)) return "—";
  return numberFormatter.format(num);
}

export function formatCurrency(value?: number | string | null): string {
  if (value === undefined || value === null) return "—";
  const num = typeof value === "string" ? Number(value) : value;
  if (Number.isNaN(num)) return "—";
  return decimalFormatter.format(num);
}
const numberFormatter = new Intl.NumberFormat("en-US");

export function formatNumber(value?: number | null): string {
  if (value === undefined || value === null) return "—";
  return numberFormatter.format(value);
}
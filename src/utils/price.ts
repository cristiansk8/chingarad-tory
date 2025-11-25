/**
 * Calcula el precio final sumando un monto fijo.
 * @param original Precio original (string o número)
 * @param amountToAdd Monto a sumar sobre el precio original (por defecto 70000)
 * @returns Precio final como string con 0 decimales
 */
export function getAjustedPrice(original: string | number, amountToAdd: number = 40000): string {
  const value = typeof original === "string" ? parseFloat(original) : original;
  if (isNaN(value)) return "0";
  return (value + amountToAdd).toFixed(0);
}
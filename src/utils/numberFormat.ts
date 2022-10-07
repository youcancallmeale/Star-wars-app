export const numberFormat = (value: string) => {
  const number = parseInt(value);
  if (value === 'unknown') return 0;
  return new Intl.NumberFormat('pt-BR').format(number);
};

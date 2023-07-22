const formatNumber = (number: number, maximumFractionDigits?: number) =>
  number.toLocaleString("en-US", { maximumFractionDigits });

export default formatNumber;

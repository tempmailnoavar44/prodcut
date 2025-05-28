const calculateDiscountPercent = (price: number, offSale: number) => {
  const result = Math.round(((price - offSale) / price) * 100);
  return result;
};

export default calculateDiscountPercent;

function ConvertNumberToPersian(numbers: number | string) {
  const persianNumbers = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];

  return numbers
    .toString()
    .replace(/\d/g, (x: string) => persianNumbers[parseInt(x)]);
}

export default ConvertNumberToPersian;

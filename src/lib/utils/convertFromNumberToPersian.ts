const convertFromNumberToPersian = (number: number) => {
  switch (number) {
    case 1:
      return "ضعیف";
    case 2:
      return "خوب";
    case 3:
      return "عالی";
  }
};

export default convertFromNumberToPersian;

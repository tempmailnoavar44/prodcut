const ArrowLeftDescriptionProduct = ({ isBlack }: { isBlack?: boolean }) => {
  if (isBlack) {
    return (
      <svg
        width="6"
        height="10"
        viewBox="0 0 6 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.52 8.52997L1 4.99997L4.52 1.46997"
          stroke="#8991A1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg
      width="6"
      height="9"
      viewBox="0 0 6 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.52 8.03L1 4.5L4.52 0.970001"
        stroke="#1FA2C1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowLeftDescriptionProduct;

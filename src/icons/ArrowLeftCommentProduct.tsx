const ArrowLeftCommentProduct = ({
  isBlack = false,
  isGreen,
}: {
  isBlack?: boolean;
  isGreen?: boolean;
}) => {
  if (isBlack) {
    return (
      <svg
        width="9"
        height="6"
        viewBox="0 0 9 6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.29047 1.48L4.76047 5L1.23047 1.48"
          stroke="#333333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (isGreen) {
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
        stroke="#9F9F9F"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowLeftCommentProduct;

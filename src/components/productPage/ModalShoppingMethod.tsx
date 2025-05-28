import { useEffect } from "react";

const ModalShoppingMethod = () => {
  
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return <div onClick={(e) => e.stopPropagation()}>ModalShoppingMethod</div>;
};

export default ModalShoppingMethod;

import Logo from "@/public/assets/images/CreditLogo.png";
import LogoEnamad from "@/public/assets/images/CreditLogoEnamad.png";
import Image from "next/image";

const GovernmentCredit = () => {
  const handleClick = (isSamandehi: boolean) => {
    if (isSamandehi) {
      window.open(
        "https://logo.samandehi.ir/Verify.aspx?id=165109&p=rfthgvkadshwrfthobpdpfvl",
        "Popup",
        "toolbar=no, scrollbars=no, location=no, statusbar=no, menubar=no, resizable=0, width=470, height=680, top=30"
      );
    }

    window.open(
      "https://trustseal.enamad.ir/Verify.aspx?id=89175&amp;p=0QEo06LXZl2QMgbR",
      "Popup",
      "toolbar=no, location=no, statusbar=no, menubar=no, scrollbars=1, resizable=0, width=580, height=600, top=30"
    );
  };

  return (
    <div className="flex justify-center items-center py-3">
      <div onClick={() => handleClick(false)} style={{ cursor: "pointer" }}>
        <Image
          src={Logo.src}
          height={Logo.height}
          width={Logo.width}
          alt="Can not upload the picture"
        />
      </div>

      <div onClick={() => handleClick(true)} style={{ cursor: "pointer" }}>
        <Image
          src={LogoEnamad.src}
          height={LogoEnamad.height}
          width={LogoEnamad.width}
          alt="Can not upload the picture"
        />
      </div>
    </div>
  );
};

export default GovernmentCredit;

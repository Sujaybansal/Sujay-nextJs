import Link from "next/link";
import React from "react";
import logoImage from "@/assets/825159_preview.jpg";
const HeaderMain = () => {
  return (
    <header>
      <Link href="/">
        <img src={logoImage.src} alt="Logo here" className="h-2 w-2" />
        Link to Home wdcf
      </Link>
    </header>
  );
};

export default HeaderMain;

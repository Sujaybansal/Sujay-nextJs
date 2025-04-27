import Link from "next/link";
import React from "react";
import logoImage from "@/assets/825159_preview.jpg";
const HeaderMain = () => {
  return (
    <header>
      <Link href="/">
        <img src={logoImage.src} alt="Logo here" className="h-10 w-10" />
        Link to Home
      </Link>
    </header>
  );
};

export default HeaderMain;

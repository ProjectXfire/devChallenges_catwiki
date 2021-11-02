import React from "react";
import Image from "next/image";
import Link from "next/link";
// Images
import IMG_Logo from "@public/catwikilogo.svg";
// Styled components
import { StyledLogo } from "@styles/logo/logo";

export const Logo = () => {
  return (
    <StyledLogo>
      <Link href="/">
        <a>
          <Image src={IMG_Logo} alt="logo"></Image>
        </a>
      </Link>
    </StyledLogo>
  );
};

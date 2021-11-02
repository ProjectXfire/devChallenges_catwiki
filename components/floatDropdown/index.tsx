import React from "react";
// Styled components
import { StyledFloatDropdown } from "@styles/floatDropdown/floatDropdown";

type FloatDropdownProps = {
  children: React.ReactNode;
  active: boolean;
};

export const FloatDropdown = ({ children, active }: FloatDropdownProps) => {
  return <StyledFloatDropdown active={active}>{children}</StyledFloatDropdown>;
};

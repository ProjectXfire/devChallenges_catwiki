import React from "react";
// Styled components
import { StyledTopSection } from "@styles/topSection/topSection";

export const TopSection: React.FC = ({ children }) => {
  return <StyledTopSection>{children}</StyledTopSection>;
};

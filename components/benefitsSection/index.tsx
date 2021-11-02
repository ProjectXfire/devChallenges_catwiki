import React from "react";
// Styled components
import { StyledBenefistsSection } from "@styles/benefitsSection/benefitsSection";

export const BenefitsSection: React.FC = ({ children }) => {
  return <StyledBenefistsSection>{children}</StyledBenefistsSection>;
};

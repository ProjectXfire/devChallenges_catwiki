import React from "react";
// Styled components
import { StyledContent } from "@styles/content/container";

export const Content: React.FC = ({ children }) => {
  return <StyledContent>{children}</StyledContent>;
};

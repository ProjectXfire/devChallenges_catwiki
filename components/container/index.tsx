import React from "react";
// Styled components
import { StyledContainer } from "@styles/container/container";

export const Container: React.FC = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

import React from "react";
// Components
import { Container } from "@components/container";
import { Logo } from "@components/logo";
import { Footer } from "@components/footer";

export const Layout: React.FC = ({ children }) => {
  return (
    <Container>
      <Logo />
      {children}
      <Footer />
    </Container>
  );
};

import { colors } from "@styles/variables/colors";
import styled from "styled-components";

export const BlackScreen = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: ${colors.black};
  opacity: 0.5;
  cursor: pointer;
  z-index: 1;
`;

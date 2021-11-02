import styled from "styled-components";
import { device } from "../variables/screens";

export const StyledContainer = styled.main`
  position: relative;
  padding-left: 5px;
  padding-right: 5px;
  padding-bottom: 100px;
  @media ${device.desktop} {
    width: 1000px;
    margin: 0 auto;
    padding-left: 0;
    padding-right: 0;
  }
`;

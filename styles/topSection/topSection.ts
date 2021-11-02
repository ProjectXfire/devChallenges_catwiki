import { device } from "@styles/variables/screens";
import styled from "styled-components";

export const StyledTopSection = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
  @media ${device.tabletM} {
    margin: 0 20px;
  }
`;

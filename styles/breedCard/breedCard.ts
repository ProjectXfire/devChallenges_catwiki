import { device } from "@styles/variables/screens";
import styled from "styled-components";

export const StyledBreedCard = styled.article`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  @media ${device.tabletM} {
    grid-template-columns: 1fr 1.5fr;
  }
  @media ${device.tabletL} {
    grid-template-columns: 1fr 2fr;
  }
  @media ${device.laptop} {
    grid-template-columns: 1fr 3fr;
  }
`;

export const StyledImageCard = styled.div`
  width: 100%;
  height: 250px;
  position: relative;
  img {
    border-radius: 10px;
  }
  @media ${device.mobileM} {
    height: 300px;
  }
  @media ${device.mobileL} {
    height: 330px;
  }
  @media ${device.tabletS} {
    height: 400px;
  }
  @media ${device.tabletM} {
    height: 220px;
  }
`;

export const StyledContentCard = styled.div``;

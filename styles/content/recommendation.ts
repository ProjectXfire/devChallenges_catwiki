import styled from "styled-components";
import { device } from "@styles/variables/screens";

export const StyledRecommendation = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  align-items: center;
  @media ${device.tabletL} {
    grid-template-columns: 1fr 1fr;
    padding: 0 30px;
  }
`;

export const StyledTextRecommendation = styled.div`
  h1 {
    margin-bottom: 30px;
  }
  p {
    margin-bottom: 10px;
  }
  a {
    display: flex;
    align-items: center;
    svg {
      margin-left: 5px;
    }
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const StyledPhotosRecommendation = styled.div`
  display: grid;
  grid-template-areas:
    "img1 img1 img1 img3 img3"
    ". img2 img2 img3 img3"
    ". img2 img2 img3 img3"
    ". img2 img2 img3 img3";
  column-gap: 10px;
  row-gap: 5px;
  justify-items: end;
`;

export const Image1 = styled.div`
  grid-area: img1;
`;
export const Image2 = styled.div`
  grid-area: img2;
`;
export const Image3 = styled.div`
  grid-area: img3;
`;

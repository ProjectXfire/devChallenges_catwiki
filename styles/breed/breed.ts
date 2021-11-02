import { device } from "@styles/variables/screens";
import styled from "styled-components";

export const StyledBreed = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
`;

export const StyledBreedDetail = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  @media ${device.tabletM} {
    padding: 0 20px;
  }
  @media ${device.tabletM} {
    grid-template-columns: 1fr 1.5fr;
  }
  @media ${device.tabletL} {
    padding: 0 50px;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
  img {
    border-radius: 10px;
  }
  @media ${device.tabletS} {
    height: 400px;
  }
  @media ${device.tabletM} {
    height: 200px;
  }
  @media ${device.laptop} {
    height: 300px;
  }
`;

export const DescriptionTitle = styled.h1`
  @media ${device.tabletS} {
    padding: 0 20px;
  }
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const StyledBreedPhotos = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  @media ${device.tabletS} {
    grid-template-columns: 1fr 1fr;
    padding: 0 20px;
  }
  @media ${device.tabletL} {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const PhotoContainer = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
  img {
    border-radius: 10px;
  }
  @media ${device.tabletS} {
    height: 250px;
  }
  @media ${device.tabletL} {
    height: 150px;
  }
  @media ${device.laptop} {
    height: 200px;
  }
`;

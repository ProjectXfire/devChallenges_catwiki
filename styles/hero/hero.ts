import { colors } from "@styles/variables/colors";
import { device } from "@styles/variables/screens";
import Image from "next/image";
import styled from "styled-components";

export const StyledHero = styled.section`
  display: grid;
  grid-template-columns: 1fr;
`;

export const StyledImage = styled.div`
  position: relative;
  img {
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
  }
`;

export const StyledImageContent = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  top: 15%;
  left: 10%;
  bottom: 15%;
  h1 {
    font-family: "Mystery Quest", cursive;
    color: white;
    font-size: 5vw;
  }
  p {
    margin: 10px 0;
    width: 35vw;
    color: white;
    font-size: 3vw;
  }
  @media ${device.mobileL} {
    h1 {
      font-size: 5vw;
    }
    p {
      width: 35vw;
      font-size: 3vw;
    }
  }
  @media ${device.tabletL} {
    div {
      width: 70% !important;
    }
  }
  @media ${device.desktop} {
    h1 {
      font-size: 4rem;
    }
    p {
      width: 400px;
      font-size: 2.5rem;
    }
  }
`;

export const StyledContent = styled.div`
  padding: 10px 10px 40px 10px;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  background-color: ${colors.lightBrown};
  overflow: hidden;
  @media ${device.tabletM} {
    padding-left: 20px;
    padding-right: 20px;
  }
  @media ${device.desktop} {
    padding-left: 50px;
    padding-right: 50px;
    padding-bottom: 80px;
  }
`;

export const StyledContentHeader = styled.div`
  p {
    margin: 10px 0;
  }
  div {
    display: grid;
    grid-template-columns: 200px;
    p {
      font-size: 1.5rem;
    }
    a {
      display: flex;
      align-items: center;
      margin-bottom: 5px;
      svg {
        margin-left: 5px;
      }
      &:hover {
        text-decoration: underline;
      }
    }
    @media ${device.tabletS} {
      grid-template-columns: 1fr 1.2fr;
      justify-content: space-between;
      a {
        justify-self: end;
        align-self: flex-end;
      }
    }
    @media ${device.tabletL} {
      grid-template-columns: 1fr 3fr;
    }
  }
`;

export const StyledContentBody = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  article {
    width: 100%;
    height: 130px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      border-radius: 10px;
    }
    p {
      position: absolute;
      bottom: 5px;
      padding: 2px 5px;
      background-color: black;
      border-radius: 10px;
      font-size: 0.8rem;
      color: white;
    }
    @media ${device.mobileM} {
      height: 150px;
    }
    @media ${device.mobileL} {
      height: 180px;
    }
    @media ${device.tabletS} {
      height: 200px;
    }
    @media ${device.tabletM} {
      height: 230px;
    }
    @media ${device.tabletL} {
      height: 220px;
    }
  }
  @media ${device.tabletL} {
    grid-template-columns: repeat(4, 1fr);
  }
`;
export const StyledImageNext = styled(Image)`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  object-fit: cover; // Optional
`;

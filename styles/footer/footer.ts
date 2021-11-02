import { colors } from "@styles/variables/colors";
import { device } from "@styles/variables/screens";
import styled from "styled-components";

export const StyledFooter = styled.footer`
  position: fixed;
  bottom: 0;
  left: 5%;
  right: 5%;
  display: flex;
  flex-direction: column;
  background-color: ${colors.black};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 20px;
  z-index: 2;
  h2 {
    font-family: "Mystery Quest", cursive;
    color: white;
    margin: 0;
  }
  p {
    color: ${colors.white};
    font-size: 0.8rem;
    span {
      font-weight: bold;
      text-decoration: underline;
    }
  }
  @media ${device.mobileL} {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

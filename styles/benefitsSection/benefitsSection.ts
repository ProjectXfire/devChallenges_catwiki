import { device } from "@styles/variables/screens";
import styled from "styled-components";

export const StyledBenefistsSection = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  img {
    border-radius: 20px;
    margin-bottom: 20px;
  }
  li {
    display: flex;
    margin-bottom: 10px;
    padding: 5px;
    -webkit-box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.1);
    box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.1);
    span {
      margin-right: 10px;
    }
  }
  @media ${device.tabletM} {
    margin: 0 20px;
  }
  @media ${device.tabletL} {
    margin: 0 50px;
  }
  @media ${device.laptop} {
    margin: 0 100px;
  }
`;

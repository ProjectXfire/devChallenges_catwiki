import { colors } from "@styles/variables/colors";
import styled from "styled-components";

type FloatDropdownProps = {
  active: boolean;
};

export const StyledFloatDropdown = styled.div<FloatDropdownProps>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 50px 20px;
  background-color: ${colors.white};
  z-index: 2;
  transform: translateY(-100%);
  transition: all 0.5s ease-in-out;
  transform: ${(props) =>
    props.active ? "translateY(0%)" : "translateY(-100%)"};
  p {
    margin-bottom: 5px;
    font-weight: bold;
  }
  button {
    position: fixed;
    top: 10px;
    right: 20px;
    cursor: pointer;
    border: none;
    background-color: ${colors.white};
    &:active {
      transform: scale(0.9);
    }
  }
`;

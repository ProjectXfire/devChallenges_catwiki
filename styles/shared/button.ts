import styled from "styled-components";

interface ButtonProps {
  width?: string;
  color?: string;
  size?: "sm" | "md" | "lg";
  bkgColor?: string;
}

export const Button = styled.button<ButtonProps>`
  width: 100%;
  max-width: ${(props) => (props.width ? props.width : "100%")};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${(props) => {
    if (props.size === "sm") {
      return "5px 10px";
    }
    if (props.size === "lg") {
      return "15px 20px";
    }
    return "10px 15px";
  }};
  font-size: ${(props) => {
    if (props.size === "sm") {
      return "0.8rem";
    }
    if (props.size === "lg") {
      return "1.2rem";
    }
    return "1rem";
  }};
  color: ${(props) => (props.color ? props.color : "white")};
  background-color: ${(props) => (props.bkgColor ? props.bkgColor : "black")};
  border: 1px solid ${(props) => (props.color ? props.color : "white")};
  outline: none;
  border-radius: 20px;
  cursor: pointer;
  &:hover {
    color: ${(props) => (props.bkgColor ? props.bkgColor : "black")};
    background-color: ${(props) => (props.color ? props.color : "white")};
    border: 1px solid ${(props) => (props.bkgColor ? props.bkgColor : "black")};
  }
`;

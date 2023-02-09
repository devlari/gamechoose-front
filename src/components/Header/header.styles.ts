import styled from "styled-components";
import Link from "next/link";

type StyledProps = {
  active: boolean;
};

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #1b1811;
`;

export const OptionsHeader = styled(Link)<StyledProps>`
  color: ${(props) => (props.active ? "#78bc61" : "#FDFFFC")};
  border-style: none;
  font-size: 1.2rem;
  font-family: "Segoe UI";
  font-weight: 500;

  &:hover {
    color: #78bc61;
  }
`;

export const HeaderLoggedContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  background-color: #1b1811;
`;

export const OptionsLoggedHeader = styled(Link)<StyledProps>`
  background-color: ${(props) => (props.active ? "inherit" : "#78bc61")};
  color: #fdfffc;
  padding: 20px 40px;
  height: 100%;
  font-size: 1.2rem;

  &:hover {
    background-color: #78bc61;
    color: #fdfffc;
  }
`;

export const HeaderDivider = styled.div`
  height: 100%;
  width: 1px;
  background-color: #fdfffc;
`;

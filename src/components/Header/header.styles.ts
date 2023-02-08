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
  margin-bottom: 25px;
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

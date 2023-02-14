import styled from "styled-components";

export const TitleImage = styled.h1`
  font-size: 4rem;
  text-align: center;
  margin-bottom: -20px;
`;

export const SubtitleImage = styled.h3`
  font-size: 1.5rem;
  text-align: center;
`;

export const BackgroundImage = styled.div`
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  background-image: url("jogos/jogosescuro.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  position: relative;
`;

export const Row = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Column = styled.div`
  width: 80%;
  padding: 20px;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const Title = styled.h1`
  font-size: 3rem;
`;

export const Content = styled.p`
  font-size: 1.5rem;
  text-align: justify;
`;

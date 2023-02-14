import { Header } from "@/components";
import {
  TitleImage,
  SubtitleImage,
  BackgroundImage,
  Row,
  Column,
  Title,
  Content,
} from "./index.styles";

export default function Home() {
  return (
    <>
      <Header title="" />
      <BackgroundImage>
        <div>
          <TitleImage className="changa">GameChoose</TitleImage>
          <SubtitleImage className="changa">Você no controle.</SubtitleImage>
        </div>
      </BackgroundImage>
      <div>
        <Row>
          <Column>
            <Title className="changa">O que somos?</Title>
            <Content className="fira-branco">
              GameChoose é mais que um site de compra e venda de jogos. Somos
              uma comunidade gamer, que apoia todos os tipos de jogos, ação,
              aventura, terror, até mesmo FIFA! Apoiamos desde desenvolvedoras
              indie até grandes empresas. Aqui você poderá comprar com desconto
              da concorrência, e ainda poderá ficar de olho nos{" "}
              <span
                style={{
                  color: "#78BC61",
                }}
              >
                gratuitos da semana
              </span>
              , onde você pode adquirir mensalmente quatro nomes aleatórios do
              nosso catálogo!
            </Content>
          </Column>
          <Column>
            <Title className="changa">Sobre Nós</Title>
            <Content className="fira-branco">
              O GameChoose é um site totalmente fictício, que consiste em um
              sistema de venda de jogos online. A ideia veio por um trabalho em
              grupo, feito em 2019. Após alguns anos de sua conclusão, eu (
              <span
                style={{
                  color: "#78BC61",
                }}
              >
                Larissa Sousa
              </span>
              ) decidi recriar o projeto, porém do zero desta vez. Para sua
              construção, utilizei Javascript no front-end (com React + Next) e
              no back-end. Este projeto e outros meus podem ser acessados{" "}
              <a
                href="https://github.com/devlari"
                style={{
                  color: "#78BC61",
                }}
              >
                aqui
              </a>
              .
            </Content>
          </Column>
          <Column>
            <Title className="changa">Contato</Title>
            <Content className="fira-branco">Deixe uma mensagem!</Content>
          </Column>
        </Row>
      </div>
    </>
  );
}

import { Header } from "@/components";
import { Input } from "@/components/Form";
import schema from "@/modules/contact/schema";
import { Form, Formik } from "formik";
import { useState } from "react";
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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  async function onSubmit(values: any) {
    console.log(values);
  }

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
            <Formik
              onSubmit={onSubmit}
              validationSchema={schema}
              initialValues={{
                id: 0,
                description: "",
                github: "",
                enabled: true,
              }}
            >
              {({ values, errors, handleChange }) => (
                <Form>
                  <Input
                    label="Nome"
                    name="name"
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    value={name}
                    error=""
                    size="medium"
                    rows={1}
                    id="name"
                    type="text"
                  />
                  <Input
                    label="Email"
                    name="email"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    value={email}
                    error=""
                    size="medium"
                    rows={1}
                    id="email"
                    type="text"
                  />
                  <Input
                    label="Mensagem"
                    name="message"
                    onChange={(e) => {
                      setMessage(e.target.value);
                    }}
                    value={message}
                    error=""
                    multiline
                    rows={4}
                    size="medium"
                    id="message"
                    type="text"
                  />
                </Form>
              )}
            </Formik>
          </Column>
        </Row>
      </div>
    </>
  );
}

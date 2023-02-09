import { Header } from "@/components";
import { Title, Subtitle, BackgroundImage } from "./index.styles";

export default function Home() {
  return (
    <>
      <Header title="" />
      <BackgroundImage>
        <div>
          <Title className="changa">GameChoose</Title>
          <Subtitle className="changa">Você no controle.</Subtitle>
        </div>
      </BackgroundImage>
    </>
  );
}

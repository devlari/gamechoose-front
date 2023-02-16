import { MediaButton, SocialMedia, StyledFooter } from "./index.styles";

export default function Footer() {
  return (
    <StyledFooter>
      <p
        className="fira-preto"
        style={{
          fontSize: "1.2rem",
          fontWeight: "bold",
        }}
      >
        GameChoose | Larissa Sousa, 2023
      </p>
      <SocialMedia>
        <MediaButton
          src="/icons/facebook.png"
          alt="Facebook"
          height={30}
          width={30}
          link="https://www.facebook.com/larissa.sousa2401"
        />
        <MediaButton
          src="/icons/github.png"
          alt="Github"
          height={30}
          width={30}
          link="https://github.com/devlari"
        />
        <MediaButton
          src="/icons/linkedin.png"
          alt="Linkedin"
          height={30}
          width={30}
          link="https://www.linkedin.com/in/larissa-sousa-silva-491893204/"
        />
      </SocialMedia>
    </StyledFooter>
  );
}

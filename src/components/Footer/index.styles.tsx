import styled from "styled-components";
import Image from "next/image";

export const StyledFooter = styled.footer`
  background-color: #78bc61;
  padding: 10px 40px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const SocialMedia = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

type MediaProps = {
  src: string;
  alt: string;
  height: number;
  width: number;
  link: string;
};

export function MediaButton({ src, alt, height, width, link }: MediaProps) {
  return (
    <a
      href={link}
      style={{
        margin: "0 10px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Image src={src} height={height} width={width} alt={alt} />
    </a>
  );
}

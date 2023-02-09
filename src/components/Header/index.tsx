import {
  HeaderContainer,
  HeaderDivider,
  HeaderLoggedContainer,
  OptionsHeader,
  OptionsLoggedHeader,
} from "./header.styles";
import Link from "next/link";
import Image from "next/image";

type Props = {
  title: string;
  isLoggedIn?: boolean;
};

export function Header({ title, isLoggedIn }: Props) {
  return (
    <>
      {isLoggedIn ? (
        <HeaderLoggedContainer>
          <Link
            href="/inicio"
            style={{
              margin: "0 10px",
            }}
          >
            <Image src="/icons/menu.png" alt="Logo" width={50} height={50} />
          </Link>
          <OptionsLoggedHeader href="/" active={title == "Início"}>
            Loja
          </OptionsLoggedHeader>
          <HeaderDivider />
          <OptionsLoggedHeader href="/" active={title == "Início"}>
            Biblioteca
          </OptionsLoggedHeader>
          <HeaderDivider />
          <OptionsLoggedHeader href="/" active={title == "Início"}>
            Perfil
          </OptionsLoggedHeader>
          <HeaderDivider />
          <OptionsLoggedHeader href="/" active={title == "Início"}>
            Amigos
          </OptionsLoggedHeader>
          <HeaderDivider />
          <OptionsLoggedHeader href="/" active={title == "Início"}>
            Sair
          </OptionsLoggedHeader>
        </HeaderLoggedContainer>
      ) : (
        <HeaderContainer>
          <OptionsHeader href="/" active={title == "Cadastro"}>
            Cadastro
          </OptionsHeader>
          <OptionsHeader href="/about" active={title == "Login"}>
            Login
          </OptionsHeader>
          <Link href="/">
            <Image src="/icons/menu.png" alt="Logo" width={50} height={50} />
          </Link>
          <OptionsHeader href="#" active={false}>
            Sobre
          </OptionsHeader>
          <OptionsHeader href="#" active={false}>
            Contato
          </OptionsHeader>
        </HeaderContainer>
      )}
    </>
  );
}

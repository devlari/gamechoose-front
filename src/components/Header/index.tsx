import { HeaderContainer, OptionsHeader } from "./header.styles";
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
        <p>Logado</p>
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

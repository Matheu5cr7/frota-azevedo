import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-container">

        {/* LOGO */}
        <div className="logo">
          <Link href="/">
            <Image
              src="/logo-site3.png"
              alt="Frota & Azevedo Advogados"
              width={180}
              height={60}
              priority
            />
          </Link>
        </div>

        {/* MENU */}
        <nav className="nav">
          <Link href="/">Início</Link>
          <Link href="/#sobre">O Escritório</Link>
          <Link href="/#areas">Áreas de Atuação</Link>
          <Link href="/#equipe">Equipe</Link>
          <Link href="/#contato">Contato</Link>
          <Link href="/blog">Blog</Link>
        </nav>

        {/* BOTÃO */}
        <Link href="/#contato" className="header-cta">
          Fale Conosco
        </Link>

      </div>
    </header>
  );
}
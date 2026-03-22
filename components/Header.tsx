import Image from "next/image";

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-container">

        {/* LOGO */}
        <div className="logo">
          <Image
            src="/logo-site3.png"
            alt="Frota & Azevedo Advogados"
            width={180}
            height={60}
            priority
          />
        </div>

        {/* MENU */}
        <nav className="nav">
          <a href="#inicio">Início</a>
          <a href="#sobre">O Escritório</a>
          <a href="#areas">Áreas de Atuação</a>
          <a href="#equipe">Equipe</a>
          <a href="#contato">Contato</a>
        </nav>

        {/* BOTÃO */}
        <a href="#contato" className="header-cta">
          Fale Conosco
        </a>

      </div>
    </header>
  );
}
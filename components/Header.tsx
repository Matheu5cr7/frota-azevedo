export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-container">
        <div className="logo">
          <span className="logo-mark">F&A</span>
          <div className="logo-text">
            <strong>Frota & Azevedo</strong>
            <span>Advogados</span>
          </div>
        </div>

        <nav className="nav">
          <a href="#inicio">Início</a>
          <a href="#sobre">O Escritório</a>
          <a href="#areas">Áreas de Atuação</a>
          <a href="#equipe">Equipe</a>
          <a href="#contato">Contato</a>
        </nav>

        <a href="#contato" className="header-cta">
          Fale Conosco
        </a>
      </div>
    </header>
  );
}
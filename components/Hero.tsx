export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="container hero-container">
        <div className="hero-content">
          <span className="section-badge">Advocacia estratégica e personalizada</span>

          <h1>
            Soluções jurídicas
            <span> para o empresário que prospera</span>
          </h1>

          <p>
            Com mais de 20 anos de experiência, Débora Frota e Kennio Azevedo acompanham a rotina e  o crescimento da sua empresa.
            Atuação especializada em Direito do Trabalho e Cível.
            Tudo que você, empresário, precisa para crescer sua empresa e proteger seu caixa.
            Escritório físico localizado em Manaus - AM.
          </p>

          <div className="hero-actions">
            <a href="#contato" className="btn btn-primary">
              Agendar atendimento
            </a>

            <a href="#sobre" className="btn btn-secondary">
              Conheça o escritório
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <img
            src="/images/hero-law.jpg"
            alt="Ambiente institucional de escritório de advocacia"
          />
        </div>
      </div>
    </section>
  );
}
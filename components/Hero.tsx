export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="container hero-container">
        <div className="hero-content">
          <span className="section-badge">Advocacia estratégica e personalizada</span>

          <h1>
            Soluções jurídicas com
            <span> excelência, solidez e confiança</span>
          </h1>

          <p>
            O escritório Frota & Azevedo Advogados atua com seriedade, técnica e
            visão estratégica, oferecendo atendimento jurídico de alto padrão para
            clientes que buscam segurança, credibilidade e resultados.
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
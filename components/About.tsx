export default function About() {
  return (
    <section className="about-section">
      <div className="container">
        <div className="about-grid">
          <div className="about-content">
            <span className="section-tag">Sobre o escritório</span>

            <h2 className="section-title about-title">
              Atuação jurídica estratégica, personalizada e orientada a resultados
            </h2>

            <p className="about-text">
              O Frota & Azevedo Advogados atua com seriedade, técnica e visão
              estratégica, oferecendo assessoria jurídica de alto padrão para
              clientes que buscam segurança, credibilidade e soluções eficazes.
            </p>

            <p className="about-text">
              Nossa atuação é pautada na análise minuciosa de cada demanda, no
              atendimento próximo e na construção de estratégias jurídicas
              consistentes, sempre com foco na proteção dos interesses de nossos
              clientes.
            </p>

            <div className="about-highlights">
              <div className="about-highlight">
                <span className="about-highlight-line"></span>
                <div>
                  <h3>Atendimento personalizado</h3>
                  <p>
                    Cada caso é tratado com profundidade, discrição e atenção às
                    particularidades do cliente.
                  </p>
                </div>
              </div>

              <div className="about-highlight">
                <span className="about-highlight-line"></span>
                <div>
                  <h3>Visão estratégica</h3>
                  <p>
                    Soluções jurídicas construídas com técnica, planejamento e
                    foco em prevenção e resultado.
                  </p>
                </div>
              </div>

              <div className="about-highlight">
                <span className="about-highlight-line"></span>
                <div>
                  <h3>Compromisso com excelência</h3>
                  <p>
                    Atuação comprometida com qualidade, confiança e alto padrão
                    profissional.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-side">
            <div className="about-card">
              <span className="about-card-tag">Frota & Azevedo</span>

              <h3 className="about-card-title">
                Advocacia com solidez institucional e postura premium
              </h3>

              <p className="about-card-text">
                Unimos experiência, rigor técnico e atendimento diferenciado para
                oferecer uma experiência jurídica segura, confiável e alinhada às
                necessidades de cada cliente.
              </p>

              <div className="about-card-divider"></div>

              <ul className="about-card-list">
                <li>Atuação ética e estratégica</li>
                <li>Relacionamento próximo com o cliente</li>
                <li>Compromisso com segurança jurídica</li>
                <li>Excelência na condução de demandas</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
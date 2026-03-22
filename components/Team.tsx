const partners = [
  {
    name: "Kennio Souza Azevedo",
    role: "Sócio Fundador - OAB/AM 10.487",
    description:
      "Atuação estratégica em demandas complexas, com foco em planejamento, proteção patrimonial e soluções jurídicas de alto nível.",
    image: "/kennio.jpg",
  },
  {
    name: "Débora de Campos Frota",
    role: "Sócia-Fundadora - OAB/AM 10.140",
    description:
      "Especialista na atuação da defesa e nos interesses das empresas em demandas trabalhistas. Possui formação em Direito pela Faculdade [DISSERTAR]",
    image: "/debora.jpg",
  },
];

const teamMembers = [
  {
    name: "Cássio Bessa",
    role: "Advogado Associado",
    image: "/cassio.jpg",
  },
  {
    name: "Gyorney Matos",
    role: "Advogado Associado",
    image: "/gyorney.jpg",
  },
  {
    name: "Matheus Mendes",
    role: "Advogado Associado",
    image: "/matheus.jpg",
  },
  {
    name: "Eduarda Gomes",
    role: "Coordenadora Administrativa  ",
    image: "/eduarda.jpg",
  },
];

export default function Team() {
  return (
    <section className="team-section" id="equipe">
      <div className="container">

        {/* HEADER */}
        <div className="team-header">
          <span className="section-tag">Nossa equipe</span>
          <h2 className="section-title team-title">
            Profissionais com atuação estratégica e excelência técnica
          </h2>
        </div>

        {/* SÓCIOS */}
        <div className="partners">
          {partners.map((partner, index) => (
            <div
              className={`partner-card ${index % 2 !== 0 ? "reverse" : ""}`}
              key={index}
            >
              <div className="partner-image">
                <img src={partner.image} alt={partner.name} />
              </div>

              <div className="partner-content">
                <span className="partner-line"></span>
                <h3 className="partner-name">{partner.name}</h3>
                <p className="partner-role">{partner.role}</p>
                <p className="partner-description">
                  {partner.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* RESTANTE DA EQUIPE */}
        <div className="team-subtitle">Nossa equipe</div>

        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div className="team-card" key={index}>
              <div className="team-image-wrapper">
                <img src={member.image} alt={member.name} />
              </div>

              <div className="team-card-content">
                <h3 className="team-name">{member.name}</h3>
                <p className="team-role">{member.role}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
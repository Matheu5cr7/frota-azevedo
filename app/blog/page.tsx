import Link from "next/link";

type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readingTime: string;
  featured?: boolean;
};

const posts: BlogPost[] = [
  {
    slug: "como-reduzir-passivo-trabalhista",
    title: "Como reduzir passivo trabalhista na sua empresa",
    excerpt:
      "Veja medidas preventivas para evitar ações trabalhistas, organizar documentos e proteger a operação da sua empresa.",
    category: "Direito do Trabalho",
    date: "22 Mar 2026",
    readingTime: "5 min de leitura",
    featured: true,
  },
  {
    slug: "cobranca-indevida-empresa",
    title: "Cobrança indevida: o que sua empresa deve fazer ao receber uma notificação",
    excerpt:
      "Entenda quais são os primeiros passos para responder com segurança e evitar prejuízos financeiros e jurídicos.",
    category: "Direito Cível",
    date: "18 Mar 2026",
    readingTime: "4 min de leitura",
  },
  {
    slug: "contratos-bem-feitos",
    title: "Contratos bem feitos evitam prejuízos e litígios",
    excerpt:
      "Um contrato claro e estratégico reduz riscos, fortalece relações comerciais e protege o crescimento do negócio.",
    category: "Empresarial",
    date: "12 Mar 2026",
    readingTime: "6 min de leitura",
  },
  {
    slug: "demissao-por-justa-causa",
    title: "Demissão por justa causa: quando a empresa pode aplicar",
    excerpt:
      "Saiba em quais situações a justa causa pode ser usada e quais cuidados documentais são indispensáveis.",
    category: "Direito do Trabalho",
    date: "08 Mar 2026",
    readingTime: "5 min de leitura",
  },
  {
    slug: "inadimplencia-entre-empresas",
    title: "Inadimplência entre empresas: caminhos jurídicos para cobrança",
    excerpt:
      "Conheça alternativas para cobrança extrajudicial e judicial com foco em recuperação de crédito e preservação do caixa.",
    category: "Direito Cível",
    date: "03 Mar 2026",
    readingTime: "5 min de leitura",
  },
  {
    slug: "compliance-para-pequenas-empresas",
    title: "Compliance também é para pequenas e médias empresas",
    excerpt:
      "Boas práticas jurídicas e internas ajudam a prevenir conflitos, melhorar processos e transmitir mais confiança ao mercado.",
    category: "Empresarial",
    date: "27 Fev 2026",
    readingTime: "4 min de leitura",
  },
];

const featuredPost = posts.find((post) => post.featured);
const otherPosts = posts.filter((post) => !post.featured);

export default function BlogPage() {
  return (
    <main className="blog-page">
      <section className="blog-hero">
        <div className="blog-container">
          <div className="blog-hero-content">
            <span className="blog-badge">Conteúdo jurídico estratégico</span>
            <h1>Blog jurídico para empresários e empresas</h1>
            <p>
              Artigos práticos sobre Direito do Trabalho, Direito Cível e prevenção
              de riscos jurídicos para ajudar sua empresa a tomar decisões com mais
              segurança.
            </p>

            <div className="blog-toolbar">
              <div className="blog-search">
                <span>🔎</span>
                <input
                  type="text"
                  placeholder="Buscar artigos, temas ou palavras-chave"
                />
              </div>

              <div className="blog-filters">
                <button>Todos</button>
                <button>Empresarial</button>
                <button>Direito do Trabalho</button>
                <button>Direito Cível</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {featuredPost && (
        <section className="blog-featured-section">
          <div className="blog-container">
            <div className="blog-section-label">Artigo em destaque</div>

            <article className="blog-featured-card">
              <div className="blog-featured-content">
                <span className="blog-category">{featuredPost.category}</span>
                <h2>{featuredPost.title}</h2>
                <p>{featuredPost.excerpt}</p>

                <div className="blog-meta">
                  <span>{featuredPost.date}</span>
                  <span>{featuredPost.readingTime}</span>
                </div>

                <Link href={`/blog/${featuredPost.slug}`} className="blog-main-button">
                  Ler artigo completo
                </Link>
              </div>

              <div className="blog-featured-image" />
            </article>
          </div>
        </section>
      )}

      <section className="blog-list-section">
        <div className="blog-container">
          <div className="blog-list-header">
            <h3>Últimos artigos</h3>
            <p>
              Conteúdo pensado para informar, orientar e prevenir riscos no dia a dia empresarial.
            </p>
          </div>

          <div className="blog-grid">
            {otherPosts.map((post) => (
              <article key={post.slug} className="blog-card">
                <span className="blog-category">{post.category}</span>
                <h4>{post.title}</h4>
                <p>{post.excerpt}</p>

                <div className="blog-meta">
                  <span>{post.date}</span>
                  <span>{post.readingTime}</span>
                </div>

                <Link href={`/blog/${post.slug}`} className="blog-link">
                  Continuar lendo →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
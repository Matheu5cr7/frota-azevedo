import Image from "next/image";
import { Instagram, MessageCircle, MapPin, Phone, Map } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">

          {/* LOGO + DESCRIÇÃO */}
          <div className="footer-brand">

            <Image
              src="/logo-site3.png"
              alt="Frota & Azevedo Advogados"
              width={150}
              height={100}
              className="footer-logo-img"
            />

            <p className="footer-description">
              Excelência jurídica dedicada a acompanhar e proteger o empresário
              brasileiro. Atuação pautada em competência técnica, discrição,
              estratégia e resultados.
            </p>

            <div className="footer-socials">
              <a
                href="https://instagram.com/frota_azevedo"
                target="_blank"
                rel="noreferrer"
                className="footer-social-link"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>

              <a
                href="https://wa.me/5592981290310"
                target="_blank"
                rel="noreferrer"
                className="footer-social-link"
                aria-label="WhatsApp"
              >
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          {/* NAVEGAÇÃO */}
          <div className="footer-nav-column">
            <h3 className="footer-column-title">Navegação</h3>

            <nav className="footer-nav-list">
              <a href="#inicio" className="footer-nav-link">Início</a>
              <a href="#escritorio" className="footer-nav-link">O Escritório</a>
              <a href="#areas" className="footer-nav-link">Áreas de Atuação</a>
              <a href="#equipe" className="footer-nav-link">Equipe</a>
              <a href="#contato" className="footer-nav-link">Contato</a>
            </nav>
          </div>

          {/* CONTATO */}
          <div className="footer-contact">
            <h3 className="footer-column-title">Matriz - Manaus</h3>

            <div className="footer-map-wrap">
              <iframe
                src="https://www.google.com/maps?q=FROTA%20%26%20AZEVEDO%20Manaus&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa da unidade Frota & Azevedo em Manaus"
              />
            </div>

            <div className="footer-contact-list">
              <div className="footer-contact-item">
                <span className="footer-contact-icon">
                  <MapPin size={18} />
                </span>
                <span>
                  Av. Theomario Pinto da Costa nº 811, Edificio SKY Platinum,
                  Sala 114, Bairro: Chapada, Manaus - AM
                </span>
              </div>

              <div className="footer-contact-item">
                <span className="footer-contact-icon">
                  <Phone size={18} />
                </span>
                <a href="tel:+5592981290310" className="footer-contact-link">
                  (92) 98129-0310
                </a>
              </div>

              <div className="footer-contact-item">
                <span className="footer-contact-icon">
                  <Map size={18} />
                </span>
                <a
                  href="https://www.google.com/maps?q=FROTA%20%26%20AZEVEDO%20Manaus"
                  target="_blank"
                  rel="noreferrer"
                  className="footer-contact-link"
                >
                  Ver no Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* RODAPÉ FINAL */}
        <div className="footer-bottom">
          <span className="footer-copy">
            © 2026 Frota & Azevedo Advogados. Todos os direitos reservados.
          </span>

          <div className="footer-bottom-links">
            <a href="/politica-de-privacidade" className="footer-bottom-link">
              Política de Privacidade
            </a>

            <span className="footer-dev">
              Desenvolvido por <strong>Frota & Azevedo</strong>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
import PromotionsSection from './PromotionsSection'

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="hero text-white py-5" aria-labelledby="hero-heading">
      <div className="container">
        <div className="row align-items-center g-4">
          {/* Texto principal */}
          <div className="col-lg-6">
            <div className="text-center text-lg-start mb-4 mb-lg-0">
              {/* Título sin repetir logo+nombre; destacamos solo el subtítulo */}
              <h1 id="hero-heading" className="display-4 fw-bold mb-3">
                Cuidamos tu hogar como tú lo haces.
              </h1>
              {/* Subtítulo solicitado */}
              <div className="mt-2 text-normal-case leading-relaxed">
                <p className="mb-2 hero__title-sub">Tu aliada en abastecimiento del hogar</p>
                <p className="mb-0 hero__description">Recibe agua, huevos y carbón sin moverte de casa, con un servicio confiable y siempre atento a ti.</p>
              </div>

              {/* CTA única para impulsar compra */}
              <div className="d-flex justify-content-center justify-content-lg-start mt-4">
                <a
                  className="btn btn-cta-yellow btn--large"
                  href="https://wa.me/56988000961?text=Hola%21%20Quiero%20mi%20pedido%20a%20domicilio.%20%C2%BFMe%20ayudas%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Quiero mi pedido a domicilio por WhatsApp"
                >
                  <span aria-hidden="true" className="me-2">→</span>
                  Quiero mi pedido a domicilio
                </a>
              </div>
            </div>
          </div>

          {/* Promociones destacadas */}
          <div className="col-lg-6">
            <PromotionsSection />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
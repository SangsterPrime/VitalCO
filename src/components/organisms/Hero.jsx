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
                Tu aliada en abastecimiento del hogar
              </h1>
              <div>
                <span className="subtitle--distribuidora">Distribuidora</span>
              </div>

              {/* Copys en párrafos cortos con mayor interlineado */}
              <div className="mt-3 text-normal-case leading-relaxed">
                <p className="mb-2">Recargas de agua purificada, huevos frescos y carbón para tus asados.</p>
                <p className="mb-2">Accesorios para dispensadores y botellones, con entrega a domicilio.</p>
                <p className="mb-0">Atención cordial y precios justos en tu barrio.</p>
              </div>

              {/* CTAs mejoradas */}
              <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-lg-start mt-4">
                <button 
                  className="btn btn-cta btn--large"
                  onClick={() => scrollToSection('menu')}
                  aria-label="Ver catálogo completo de productos"
                >
                  <span aria-hidden="true" className="me-2">🛒</span>
                  Ver catálogo
                </button>
                <a 
                  className="btn btn-cta-outline btn--large"
                  href="https://wa.me/573012345678?text=Hola! Me interesa información sobre sus productos"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Contactar por WhatsApp en una nueva pestaña"
                >
                  <span aria-hidden="true" className="me-2">💬</span>
                  WhatsApp
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
import { promotions } from '../../data/products'
import ProductCard from '../molecules/ProductCard'

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="hero bg-primary text-white py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="text-center text-lg-start mb-4 mb-lg-0">
              <h1 className="display-3 fw-bold mb-3">
                <span className="d-block">VitalCO</span>
                <span className="d-block h3 fw-normal opacity-75">Distribuidora</span>
              </h1>
              <p className="lead mb-4">
                ¡Bienvenidos a <strong>VitalCO</strong>! Somos una distribuidora cercana y confiable.
                Ofrecemos <strong>recargas de agua purificada</strong>, <strong>huevos frescos</strong>,
                <strong> carbón</strong> y <strong>accesorios</strong> para tus dispensadores y botellones.
                <br />
                Atención amable, buenos precios y <strong>entrega a domicilio</strong>.
              </p>
              
              <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-lg-start">
                <button 
                  className="btn btn-light btn-lg px-4"
                  onClick={() => scrollToSection('menu')}
                  aria-label="Ver catálogo completo de productos"
                >
                  <span className="me-2">🛒</span> Ver Catálogo
                </button>
                <a 
                  className="btn btn-outline-light btn-lg px-4"
                  href="https://wa.me/573012345678?text=Hola! Me interesa información sobre sus productos"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Contactar por WhatsApp"
                >
                  <span className="me-2">💬</span> WhatsApp
                </a>
              </div>
            </div>
          </div>
          
          <div className="col-lg-6">
            {/* Preview de promociones destacadas */}
            <div className="text-center">
              <h2 className="h4 mb-3">
                <span className="badge bg-warning text-dark px-3 py-2 rounded-pill">
                  🔥 Promociones Especiales
                </span>
              </h2>
              <div className="row g-3">
                {promotions.map(promo => (
                  <div key={promo.id} className="col-md-6">
                    <ProductCard 
                      product={promo} 
                      isPromo={true}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
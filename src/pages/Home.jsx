import Hero from '../components/organisms/Hero'
import ProductCatalog from '../components/organisms/ProductCatalog'

const Home = () => {
  return (
    <>
      <Hero />
      <ProductCatalog />
      {/* CTA band before footer */}
      <section className="py-5 bg-light border-top border-bottom mt-4">
        <div className="container">
          <div className="row align-items-center g-3">
            <div className="col-lg-8">
              <p className="h5 mb-0 fw-semibold">
                VitalCO lleva lo esencial a tu puerta. Compra fácil, rápido y con confianza.
              </p>
            </div>
            <div className="col-lg-4 text-lg-end">
              <div className="d-flex gap-2 justify-content-start justify-content-lg-end">
                <a href="#promos" className="btn btn-outline-dark">
                  Ver promociones activas
                </a>
                <a
                  className="btn btn-cta-yellow"
                  href="https://wa.me/573012345678?text=Hola%21%20Quiero%20agendar%20mi%20pedido%20hoy.%20%C2%BFMe%20ayudas%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Agenda tu pedido hoy
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home

import { promotions } from '../../data/products'
import ProductCard from '../molecules/ProductCard'

const PromotionsSection = () => {
  return (
    <section id="promos" aria-labelledby="promos-heading" className="promos-section">
      <div className="text-center mb-3">
        <h2 id="promos-heading" className="h5 text-normal-case fw-semibold mb-2">
          <span className="badge bg-warning text-dark px-3 py-2 rounded-pill">🔥 Promociones</span>
        </h2>
        <p className="text-white-50 small mb-0">Aprovecha descuentos por tiempo limitado</p>
      </div>

      <div className="row g-3">
        {promotions.map((promo) => (
          <div key={promo.id} className="col-sm-6">
            <div className="promo-card-wrapper">
              <ProductCard product={promo} isPromo={true} />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default PromotionsSection

import { useState } from 'react'
import PropTypes from 'prop-types'
import { useCart } from '../../context/CartContext'
import LoadingSpinner from '../atoms/LoadingSpinner'

const ProductCard = ({ product, isPromo = false }) => {
  const { addItem } = useCart()
  const [quantity, setQuantity] = useState(1)
  const [imageLoaded, setImageLoaded] = useState(false)
  const [imageError, setImageError] = useState(false)

  // Datos de promoción (si aplica)
  const hasPromoInfo = isPromo && Number(product.originalPrice) > 0 && Number(product.discountPrice) > 0
  const discountPercent = hasPromoInfo
    ? Math.round(((Number(product.originalPrice) - Number(product.discountPrice)) / Number(product.originalPrice)) * 100)
    : 0

  const handleAddToCart = () => {
    if (product.price === 0) {
      // Para productos con precio 0, redirigir a WhatsApp
      const message = `Hola! Me interesa el producto: ${product.name}`
      const whatsappUrl = `https://wa.me/573012345678?text=${encodeURIComponent(message)}`
      window.open(whatsappUrl, '_blank')
    } else {
      addItem(product, quantity)
    }
  }

  const decreaseQuantity = () => {
    setQuantity(Math.max(1, quantity - 1))
  }

  const increaseQuantity = () => {
    setQuantity(quantity + 1)
  }

  const formatPrice = (price) => {
    if (price === 0) return product.priceText || 'Consultar precio'
    return `$${price.toLocaleString()}`
  }

  return (
    <div className={`card h-100 shadow-sm ${isPromo ? 'border-warning promo-card' : ''}`}>
      {isPromo && (
        <>
          <div className="position-absolute top-0 start-0 m-2" style={{ zIndex: 10 }}>
            <span className="badge bg-warning text-dark px-2 py-1 rounded-pill">
              🔥 PROMO
            </span>
          </div>
          {hasPromoInfo && (
            <div className="position-absolute top-0 end-0 m-2" style={{ zIndex: 10 }}>
              <span className="badge bg-danger-subtle text-danger border border-danger rounded-pill px-2 py-1">
                -{discountPercent}%
              </span>
            </div>
          )}
        </>
      )}

      <div 
        className="card-img-top position-relative"
        style={{ 
          height: isPromo ? 'auto' : '200px',
          overflow: isPromo ? 'visible' : 'hidden',
          backgroundColor: isPromo ? '#f8f9fa' : undefined
        }}
      >
        {!imageLoaded && !imageError && (
          <div className="position-absolute top-50 start-50 translate-middle">
            <LoadingSpinner size="small" color="primary" />
          </div>
        )}
        
        <img 
          src={product.image}
          alt={product.name}
          loading="lazy"
          className={isPromo ? 'w-100' : 'w-100 h-100'}
          style={{ 
            objectFit: isPromo ? 'contain' : 'cover',
            height: isPromo ? 'auto' : undefined,
            opacity: imageLoaded ? 1 : 0,
            transition: 'opacity 0.3s ease'
          }}
          onLoad={() => {
            setImageLoaded(true)
            setImageError(false)
          }}
          onError={(e) => {
            setImageError(true)
            setImageLoaded(true)
            e.target.style.display = 'none'
          }}
        />
        
        {imageError && (
          <div className="position-absolute top-50 start-50 translate-middle text-center text-muted">
            <div className="display-6">📷</div>
            <small>Imagen no disponible</small>
          </div>
        )}
      </div>
      
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text text-muted small flex-grow-1">{product.description}</p>
        
        {hasPromoInfo ? (
          <div className="mb-3">
            <div className="small text-muted mb-1">
              <span className="text-decoration-line-through">${product.originalPrice?.toLocaleString?.() ?? product.originalPrice}</span>
            </div>
            <div className="h5 mb-1 text-success">
              Ahora ${product.discountPrice?.toLocaleString?.() ?? product.discountPrice}
            </div>
            {product.price === 0 && product.priceText && (
              <div className="text-success fw-semibold">{product.priceText}</div>
            )}
          </div>
        ) : (
          <div className="fw-bold text-success mb-3">
            {formatPrice(product.price)}
          </div>
        )}
        
        <div className="d-flex align-items-center gap-2 mt-auto">
          {product.price > 0 && (
            <div className="btn-group" aria-label="Cantidad">
              <button 
                onClick={decreaseQuantity}
                className="btn btn-outline-secondary btn-sm"
                aria-label="Disminuir cantidad"
              >
                −
              </button>
              <span className="btn btn-outline-secondary btn-sm disabled">
                {quantity}
              </span>
              <button 
                onClick={increaseQuantity}
                className="btn btn-outline-secondary btn-sm"
                aria-label="Aumentar cantidad"
              >
                +
              </button>
            </div>
          )}
          
          <button 
            onClick={handleAddToCart}
            className={`btn flex-fill ${
              product.price === 0 
                ? 'btn-outline-primary' 
                : 'btn-primary'
            } ${isPromo ? 'rounded-pill' : ''}`}
          >
            {product.price === 0 ? 'Consultar' : 'Agregar'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard

ProductCard.propTypes = {
  isPromo: PropTypes.bool,
  product: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    image: PropTypes.string,
    category: PropTypes.string,
    price: PropTypes.number, // 0 when consultar
    priceText: PropTypes.string,
    // promo fields
    originalPrice: PropTypes.number,
    discountPrice: PropTypes.number,
  }).isRequired,
}
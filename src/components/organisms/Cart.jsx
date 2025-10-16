import { useState } from 'react'
import { useCart } from '../../context/CartContext'

const Cart = () => {
  const { 
    items, 
    isOpen, 
    closeCart, 
    removeItem, 
    updateQuantity, 
    getTotalPrice,
    generateWhatsAppMessage,
    
  } = useCart()

  const [customerName, setCustomerName] = useState('')
  const [address, setAddress] = useState('')

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity <= 0) {
      removeItem(id)
    } else {
      updateQuantity(id, newQuantity)
    }
  }

  const handleCheckout = () => {
    if (items.length === 0) return

    const message = generateWhatsAppMessage(customerName, address)
  const whatsappUrl = `https://wa.me/56988000961?text=${encodeURIComponent(message)}`
    
    window.open(whatsappUrl, '_blank')
    
    // Opcional: limpiar carrito después de enviar
    // clearCart()
    // closeCart()
  }

  const formatPrice = (price) => {
    return `$${price.toLocaleString()}`
  }

  return (
    <>
      {/* Overlay para móviles */}
      {isOpen && (
        <div 
          className="offcanvas-backdrop fade show d-md-none" 
          onClick={closeCart}
        />
      )}

      {/* Carrito lateral - Bootstrap Offcanvas */}
      <div 
        className={`offcanvas offcanvas-end ${isOpen ? 'show' : ''}`}
        tabIndex="-1"
        id="cartOffcanvas"
        aria-labelledby="cartOffcanvasLabel"
        style={{ visibility: isOpen ? 'visible' : 'hidden' }}
      >
        <div className="offcanvas-header border-bottom">
          <h5 className="offcanvas-title fw-bold" id="cartOffcanvasLabel">
            <i className="me-2">🛒</i>
            Tu carrito
          </h5>
          <button 
            type="button" 
            className="btn-close" 
            onClick={closeCart}
            aria-label="Cerrar carrito"
          ></button>
        </div>

        <div className="offcanvas-body">
          {items.length === 0 ? (
            <div className="text-center py-5 text-muted">
              <div className="display-1">🛒</div>
              <h6>Tu carrito está vacío</h6>
              <p className="small">Agrega productos desde el catálogo</p>
            </div>
          ) : (
            <div className="cart-items">
              {items.map(item => (
                <div key={item.id} className="d-flex align-items-center p-3 border-bottom">
                  <img 
                    src={item.image}
                    alt={item.name}
                    className="rounded"
                    style={{
                      width: '60px',
                      height: '60px',
                      objectFit: 'cover'
                    }}
                  />
                  
                  <div className="flex-grow-1 ms-3">
                    <h6 className="mb-1 text-truncate">{item.name}</h6>
                    
                    <div className="d-flex align-items-center gap-2">
                      <div className="btn-group btn-group-sm">
                        <button 
                          onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                          className="btn btn-outline-secondary"
                        >
                          −
                        </button>
                        <span className="btn btn-outline-secondary disabled">
                          {item.quantity}
                        </span>
                        <button 
                          onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                          className="btn btn-outline-secondary"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="text-end">
                    <div className="fw-bold small">
                      {formatPrice(item.price * item.quantity)}
                    </div>
                    <button 
                      onClick={() => removeItem(item.id)}
                      className="btn btn-sm btn-outline-danger mt-1"
                      aria-label="Eliminar producto"
                    >
                      🗑️
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-top p-3 bg-light">
            {/* Resumen del carrito */}
            <div className="d-flex justify-content-between mb-2">
              <span>Subtotal:</span>
              <strong>{formatPrice(getTotalPrice())}</strong>
            </div>
            <div className="d-flex justify-content-between mb-3 pb-2 border-bottom">
              <span className="h6">Total:</span>
              <strong className="h6 text-primary">{formatPrice(getTotalPrice())}</strong>
            </div>

            {/* Formulario de datos */}
            <div className="mb-3">
              <div className="mb-2">
                <label htmlFor="customerName" className="form-label small">
                  Nombre:
                </label>
                <input
                  id="customerName"
                  type="text"
                  className="form-control form-control-sm"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder="Tu nombre"
                />
              </div>
              
              <div className="mb-3">
                <label htmlFor="address" className="form-label small">
                  Dirección:
                </label>
                <textarea
                  id="address"
                  className="form-control form-control-sm"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Dirección de entrega"
                  rows="2"
                />
              </div>
            </div>

            <small className="text-muted d-block mb-3">
              Precios con IVA incluido.
            </small>
            
            <button 
              onClick={handleCheckout}
              className="btn btn-success w-100 d-flex align-items-center justify-content-center gap-2"
            >
              <span>💬</span>
              Pedir por WhatsApp
            </button>
          </div>
        )}
      </div>
    </>
  )
}

export default Cart
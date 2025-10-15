import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../../context/CartContext'
import { useMobileMenu, useScrollPosition } from '../../hooks/useUI'

const Header = () => {
  const { toggleCart, getTotalItems } = useCart()
  const { isOpen: mobileMenuOpen, toggle: toggleMobileMenu, close: closeMobileMenu } = useMobileMenu()
  const { isAtTop } = useScrollPosition()
  
  const menuRef = useRef(null)
  const buttonRef = useRef(null)
  const totalItems = getTotalItems()

  const handleToggleMobileMenu = (e) => {
    e.stopPropagation()
    toggleMobileMenu()
  }

  // Navegación a secciones se hace con enlaces de hash (/#menu, /#hero)

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        mobileMenuOpen &&
        menuRef.current &&
        buttonRef.current &&
        !menuRef.current.contains(event.target) &&
        !buttonRef.current.contains(event.target)
      ) {
        closeMobileMenu()
      }
    }

    const handleEscapeKey = (event) => {
      if (event.key === 'Escape' && mobileMenuOpen) {
        closeMobileMenu()
      }
    }

    if (mobileMenuOpen) {
      document.addEventListener('click', handleClickOutside)
      document.addEventListener('keydown', handleEscapeKey)
    }

    return () => {
      document.removeEventListener('click', handleClickOutside)
      document.removeEventListener('keydown', handleEscapeKey)
    }
  }, [mobileMenuOpen, closeMobileMenu])

  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-light bg-white sticky-top ${!isAtTop ? 'navbar-scrolled shadow' : ''}`}>
        <div className="container-fluid px-3 px-lg-4">
          {/* Logo */}
          <Link className="navbar-brand fw-bold text-dark d-flex align-items-center" to="/">
            <img 
              src="/images/loguisimo.webp" 
              alt="vitalCO" 
              width="30"
              height="30"
              className="me-2"
              loading="eager"
              decoding="async"
              onError={(e) => {
                e.target.style.display = 'none'
              }}
            />{' '}
            vitalCO
          </Link>

          {/* Desktop Navigation */}
          <div className="d-none d-lg-flex align-items-center">
            <ul className="navbar-nav me-3">
              <li className="nav-item">
                <Link to="/#menu" className="nav-link fw-medium">📋 Catálogo</Link>
              </li>
              <li className="nav-item">
                <Link to="/#hero" className="nav-link fw-medium">🎉 Promociones</Link>
              </li>
              <li className="nav-item">
                <Link to="/contacto" className="nav-link fw-medium">📞 Contáctanos</Link>
              </li>
            </ul>
            
            {/* Botón carrito - Solo visible en desktop */}
            <button 
              onClick={toggleCart}
              className="btn btn-outline-primary position-relative me-2" 
              aria-label={`Abrir carrito con ${totalItems} productos`}
            >
              🛒 Carrito
              {totalItems > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {totalItems}
                  <span className="visually-hidden">productos en carrito</span>
                </span>
              )}
            </button>
          </div>
          
          {/* Botón menú móvil - Bootstrap toggler */}
          <button 
            ref={buttonRef}
            onClick={handleToggleMobileMenu}
            className="navbar-toggler d-lg-none border-0"
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={mobileMenuOpen}
          >
            <div className={`navbar-toggler-custom ${mobileMenuOpen ? 'active' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </div>
      </nav>

      {/* Menú móvil: Offcanvas superior para usar desde cualquier scroll */}
      {mobileMenuOpen && (
        <button
          type="button"
          className="offcanvas-backdrop fade show d-lg-none border-0 p-0 m-0"
          aria-label="Cerrar menú móvil"
          onClick={closeMobileMenu}
        />
      )}
      <div 
        ref={menuRef}
        className={`offcanvas offcanvas-top d-lg-none ${mobileMenuOpen ? 'show' : ''}`}
        style={{ visibility: mobileMenuOpen ? 'visible' : 'hidden', height: '50vh' }}
        aria-labelledby="mobileMenuLabel"
      >
        <div className="offcanvas-header border-bottom">
          <h5 className="offcanvas-title" id="mobileMenuLabel">Menú</h5>
          <button type="button" className="btn-close" aria-label="Cerrar" onClick={closeMobileMenu}></button>
        </div>
  <div className="offcanvas-body" style={{ overflowY: 'auto' }}>
          <ul className="navbar-nav me-auto mb-3">
            <li className="nav-item">
              <Link 
                to="/#menu" 
                className="nav-link py-3 border-bottom"
                onClick={closeMobileMenu}
              >
                <i className="me-2">📋</i>{' '}
                Catálogo completo
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="/#hero" 
                className="nav-link py-3 border-bottom"
                onClick={closeMobileMenu}
              >
                <i className="me-2">🎉</i>{' '}
                Ver promociones
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="/contacto" 
                className="nav-link py-3 border-bottom"
                onClick={closeMobileMenu}
              >
                <i className="me-2">📞</i>{' '}
                Contáctanos
              </Link>
            </li>
          </ul>

          {/* Botones de acción móviles */}
          <div className="d-grid gap-2 mb-3">
            <button
              onClick={() => {
                toggleCart()
                closeMobileMenu()
              }}
              className="btn btn-outline-primary d-flex align-items-center justify-content-between"
            >
              <span>
                <i className="me-2">🛒</i>{' '}
                Mi carrito
              </span>
              {totalItems > 0 ? (
                <span className="badge bg-danger rounded-pill">{totalItems}</span>
              ) : (
                <small className="text-muted">(vacío)</small>
              )}
            </button>

            <a
              href="https://wa.me/573012345678?text=Hola! Me interesa información sobre sus productos"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-success"
              onClick={closeMobileMenu}
            >
              <i className="me-2">💬</i>{' '}
              Contactar por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
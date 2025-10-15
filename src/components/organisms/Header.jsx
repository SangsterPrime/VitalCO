import { useEffect, useRef } from 'react'
import { useCart } from '../../context/CartContext'
import { useMobileMenu, useSmoothScroll, useScrollPosition } from '../../hooks/useUI'

const Header = () => {
  const { toggleCart, getTotalItems } = useCart()
  const { isOpen: mobileMenuOpen, toggle: toggleMobileMenu, close: closeMobileMenu } = useMobileMenu()
  const scrollToSection = useSmoothScroll()
  const { isAtTop } = useScrollPosition()
  
  const menuRef = useRef(null)
  const buttonRef = useRef(null)
  const totalItems = getTotalItems()

  const handleToggleMobileMenu = (e) => {
    e.stopPropagation()
    toggleMobileMenu()
  }

  const handleScrollToSection = (sectionId) => {
    scrollToSection(sectionId, 80) // offset de 80px para el header fijo
    closeMobileMenu()
  }

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
          <a className="navbar-brand fw-bold text-dark d-flex align-items-center" href="#home">
            <img 
              src="/logo.webp" 
              alt="vitalCO" 
              width="30"
              height="30"
              className="me-2"
              loading="eager"
              decoding="async"
              onError={(e) => {
                e.target.style.display = 'none'
              }}
            />
            vitalCO
          </a>

          {/* Desktop Navigation */}
          <div className="d-none d-lg-flex align-items-center">
            <ul className="navbar-nav me-3">
              <li className="nav-item">
                <a 
                  href="#menu" 
                  className="nav-link fw-medium"
                  onClick={(e) => {
                    e.preventDefault()
                    handleScrollToSection('menu')
                  }}
                >
                  📋 Catálogo
                </a>
              </li>
              <li className="nav-item">
                <a 
                  href="#hero" 
                  className="nav-link fw-medium"
                  onClick={(e) => {
                    e.preventDefault()
                    handleScrollToSection('hero')
                  }}
                >
                  🎉 Promociones
                </a>
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

      {/* Menú móvil desplegable */}
      <div 
        ref={menuRef}
        className={`collapse navbar-collapse d-lg-none ${mobileMenuOpen ? 'show' : ''}`}
        id="mobileMenu"
      >
        <div className="container-fluid px-3">
          <ul className="navbar-nav me-auto mb-3">
            <li className="nav-item">
              <a 
                href="#menu" 
                className="nav-link py-3 border-bottom"
                onClick={(e) => {
                  e.preventDefault()
                  handleScrollToSection('menu')
                }}
              >
                <i className="me-2">📋</i>
                Catálogo completo
              </a>
            </li>
            <li className="nav-item">
              <a 
                href="#hero" 
                className="nav-link py-3 border-bottom"
                onClick={(e) => {
                  e.preventDefault()
                  handleScrollToSection('hero')
                }}
              >
                <i className="me-2">🎉</i>
                Ver promociones
              </a>
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
                <i className="me-2">🛒</i>
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
              <i className="me-2">💬</i>
              Contactar por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
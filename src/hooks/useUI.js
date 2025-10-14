import { useState, useEffect } from 'react'

/**
 * Hook personalizado para manejar el estado del menú móvil
 * @param {boolean} initialState - Estado inicial del menú
 * @returns {object} Estado y funciones para manejar el menú
 */
export const useMobileMenu = (initialState = false) => {
  const [isOpen, setIsOpen] = useState(initialState)

  const toggle = () => setIsOpen(prev => !prev)
  const open = () => setIsOpen(true)
  const close = () => setIsOpen(false)

  // Cerrar menú al redimensionar ventana
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return {
    isOpen,
    toggle,
    open,
    close
  }
}

/**
 * Hook personalizado para manejar scroll suave
 * @returns {function} Función para hacer scroll a una sección
 */
export const useSmoothScroll = () => {
  const scrollToSection = (sectionId, offset = 0) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return scrollToSection
}

/**
 * Hook personalizado para detectar scroll
 * @returns {object} Información sobre el scroll
 */
export const useScrollPosition = () => {
  const [scrollY, setScrollY] = useState(0)
  const [isScrollingDown, setIsScrollingDown] = useState(false)

  useEffect(() => {
    let lastScrollY = window.pageYOffset

    const handleScroll = () => {
      const currentScrollY = window.pageYOffset
      setIsScrollingDown(currentScrollY > lastScrollY)
      setScrollY(currentScrollY)
      lastScrollY = currentScrollY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return {
    scrollY,
    isScrollingDown,
    isAtTop: scrollY < 10
  }
}

/**
 * Hook personalizado para manejar el estado de carga de imágenes
 * @returns {object} Estado y funciones para manejar la carga de imágenes
 */
export const useImageLoader = () => {
  const [loadedImages, setLoadedImages] = useState(new Set())

  const handleImageLoad = (imageSrc) => {
    setLoadedImages(prev => new Set(prev).add(imageSrc))
  }

  const isImageLoaded = (imageSrc) => {
    return loadedImages.has(imageSrc)
  }

  return {
    handleImageLoad,
    isImageLoaded
  }
}
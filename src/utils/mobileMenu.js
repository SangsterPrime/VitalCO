// Mobile menu functionality - converted from original trespuntos.js

export const initMobileMenu = () => {
  const btnMenuMovil = document.getElementById('btnMenuMovil')
  const menuMovil = document.getElementById('menuMovil')

  if (!btnMenuMovil || !menuMovil) return

  const toggleMenu = () => {
    const isOpen = menuMovil.hidden === false
    
    if (isOpen) {
      menuMovil.hidden = true
      btnMenuMovil.setAttribute('aria-expanded', 'false')
    } else {
      menuMovil.hidden = false
      btnMenuMovil.setAttribute('aria-expanded', 'true')
    }
  }

  // Close menu when clicking outside
  const closeOnOutsideClick = (event) => {
    if (!menuMovil.contains(event.target) && !btnMenuMovil.contains(event.target)) {
      menuMovil.hidden = true
      btnMenuMovil.setAttribute('aria-expanded', 'false')
    }
  }

  btnMenuMovil.addEventListener('click', toggleMenu)
  document.addEventListener('click', closeOnOutsideClick)

  // Close menu on escape key
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !menuMovil.hidden) {
      menuMovil.hidden = true
      btnMenuMovil.setAttribute('aria-expanded', 'false')
    }
  })
}

// Note: In React, this functionality is handled by state in the Header component
// This file is kept for reference of the original functionality
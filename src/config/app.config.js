/**
 * Configuración de la aplicación VitalCO
 * @author Joel Sangster (S4ngster)
 * @license Distribuidora - Licencia S4ngster 2025
 */

export const APP_CONFIG = {
  // Información de la empresa
  company: {
    name: 'VitalCO',
  fullName: 'VitalCO - Distribuidora',
    description: 'Recargas de agua, huevos frescos, carbón y accesorios',
    tagline: 'Entrega a domicilio - Calidad garantizada'
  },

  // Configuración de contacto
  contact: {
    whatsapp: {
      number: '573012345678', // Actualizar con el número real
      message: 'Hola! Me interesa información sobre sus productos'
    },
    // Puedes agregar más métodos de contacto aquí
    email: 'info@vitalco.com',
    address: 'Dirección de la distribuidora'
  },

  // Configuración de la aplicación
  app: {
  title: 'VitalCO - Distribuidora',
    version: '1.0.0',
    author: 'Joel Sangster (S4ngster)',
    year: 2025
  },

  // Configuración de la UI
  ui: {
    // Tiempo de auto-cierre para notificaciones (ms)
    toastDuration: 3000,
    
    // Configuración del carrito
    cart: {
      maxItems: 50,
      storageKey: 'vitalco-cart',
      autoSave: true
    },

    // Configuración de imágenes
    images: {
      placeholderPath: '/images/placeholder.webp',
      lazyLoading: true,
      compressionQuality: 85
    },

    // Animaciones
    animations: {
      enabled: true,
      reducedMotion: false // Se detecta automáticamente
    }
  },

  // URLs y rutas
  routes: {
    home: '/',
    catalog: '#menu',
    promotions: '#hero',
    cart: '#cart'
  },

  // Configuración de analytics (opcional)
  analytics: {
    enabled: false,
    trackingId: null
  },

  // Configuración de SEO
  seo: {
    keywords: 'agua, huevos, carbón, dispensadores, recargas, domicilio',
  description: 'VitalCO - Distribuidora: recargas de agua, huevos frescos, carbón y accesorios. Entrega a domicilio con calidad garantizada.',
    author: 'Joel Sangster (S4ngster)',
    locale: 'es_CO'
  }
}

// Utilidades de configuración
export const getWhatsAppUrl = (message = APP_CONFIG.contact.whatsapp.message) => {
  return `https://wa.me/${APP_CONFIG.contact.whatsapp.number}?text=${encodeURIComponent(message)}`
}

export const formatPrice = (price) => {
  if (price === 0) return 'Consultar precio'
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0
  }).format(price)
}

export const isProduction = () => {
  return import.meta.env.PROD
}

export const isDevelopment = () => {
  return import.meta.env.DEV
}

export default APP_CONFIG
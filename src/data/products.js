export const products = [
  // Recargas de agua
  {
    id: 'recarga_2',
    name: 'Recarga x2 botellones 20L',
    description: 'Servicio de recarga a domicilio.',
    price: 4600,
    category: 'recargas',
    image: '/images/2recarga.webp'
  },
  {
    id: 'recarga_3',
    name: 'Recarga x3 botellones 20L',
    description: 'Ideal para la semana.',
    price: 6900,
    category: 'recargas',
    image: '/images/3recargas.webp'
  },

  // Huevos
  {
    id: 'huevo_30',
    name: 'Huevos x30',
    description: 'Frescos y seleccionados.',
    price: 8570,
    category: 'huevos',
    image: '/images/30huevos.webp',
    priceText: '8.570 los 30'
  },
  {
    id: 'huevo_180',
    name: 'Huevos caja',
    description: 'Para negocios o familias grandes.',
    price: 0,
    category: 'huevos',
    image: '/images/180caja.webp',
    priceText: 'consultar precio la caja'
  },

  // Huevos Súper
  {
    id: 'huevo_super_20',
    name: 'Huevos Súper x20',
    description: 'Bandeja por 20 unidades.',
    price: 6900,
    category: 'huevos',
    image: '/images/30huevos2.webp',
    priceText: '6.900 los 20'
  },

  // Carbón
  {
    id: 'carbon_unidad',
    name: 'Carbón 1 unidad',
    description: 'Al mayor y detalle.',
    price: 3000,
    category: 'carbon',
    image: '/images/CarbonUnitario.webp'
  },
  {
    id: 'carbon_2',
    name: 'Carbón 2 unidades',
    description: 'Pack de 2 unidades.',
    price: 5000,
    category: 'carbon',
    image: '/images/carbon2unidades.webp'
  },
  {
    id: 'carbon_3',
    name: 'Carbón 3 unidades',
    description: 'Pack de 3 unidades.',
    price: 7500,
    category: 'carbon',
    image: '/images/carbon3unidades.webp'
  },
  {
    id: 'carbon_bolsa',
    name: 'Bolsa de carbón',
    description: 'Bolsa lista para tus asados.',
    price: 29880,
    category: 'carbon',
    image: '/images/BolsaCarbon.webp'
  },

  // Accesorios
  {
    id: 'rack_10_bidones',
    name: 'Rack 10 bidones negro y gris',
    description: 'Estructura robusta para almacenar hasta 10 bidones.',
    price: 55000,
    category: 'organizadores',
    image: '/images/rack10bidones.webp'
  },
  {
    id: 'disp_mesa',
    name: 'Dispensador de mesa',
    description: 'Compacto y práctico.',
    price: 6990,
    category: 'accesorios',
    image: '/images/dispensordemesa.webp'
  },
  {
    id: 'bomba_usb_premium',
    name: 'Bomba USB Premium',
    description: 'Mayor caudal y autonomía.',
    price: 9990,
    category: 'accesorios',
    image: '/images/bombaUSBpremium.webp'
  },
  {
    id: 'bomba_usb',
    name: 'Bomba eléctrica USB',
    description: 'Recargable, fácil de usar.',
    price: 5640,
    category: 'accesorios',
    image: '/images/bombaUSB.webp'
  },
  {
    id: 'disp_pinguino',
    name: 'Dispensador Pingüino',
    description: 'Divertido para los niños.',
    price: 0,
    category: 'accesorios',
    image: '/images/dispensadorPinguino.webp',
    priceText: 'consultar precio'
  },
  {
    id: 'disp_panda',
    name: 'Dispensador Panda',
    description: 'Divertido para los niños.',
    price: 0,
    category: 'accesorios',
    image: '/images/dispensadorapanda.webp',
    priceText: 'consultar precio'
  },
  {
    id: 'disp_pedestal',
    name: 'Dispensador pedestal',
    description: 'Para oficinas y salas.',
    price: 0,
    category: 'dispensadores',
    image: '/images/dispensadorpedestal.webp',
    priceText: 'consultar el precio'
  },
  {
    id: 'disp_lb_b2',
    name: 'Dispensador LB-B2',
    description: 'Robusto y eficiente.',
    price: 0,
    category: 'dispensadores',
    image: '/images/dispensadorLB-B2.webp',
    priceText: 'consultar precio'
  },
  {
    id: 'disp_sm_v1',
    name: 'Dispensador SM-V1',
    description: 'Moderno y silencioso.',
    price: 0,
    category: 'dispensadores',
    image: '/images/dispensadorSM-V1.webp',
    priceText: 'consultar precio'
  }
]

export const promotions = [
  {
    id: 'promo_1',
    name: 'Promo (Super): 2 recargas + 1 bandeja 20',
    description: 'Precios de promoción',
    price: 0,
    originalPrice: 11500,
    discountPrice: 10990,
  image: '/Promo1.webp',
    priceText: 'Precio de promoción'
  },
  {
    id: 'promo_2',
    name: 'Promo (extra): 2 recargas + 1 bandeja de huevo 30 un.',
    description: 'Precios de promoción',
    price: 0,
    originalPrice: 13170,
    discountPrice: 12990,
  image: '/Promo2.webp',
    priceText: 'Precio de promoción'
  }
]

export const categories = [
  { id: 'todos', name: 'Todos los artículos' },
  { id: 'recargas', name: 'Recargas de agua' },
  { id: 'huevos', name: 'Huevos' },
  { id: 'carbon', name: 'Carbón' },
  { id: 'accesorios', name: 'Accesorios' },
  { id: 'dispensadores', name: 'Dispensadores electrónicos' },
  { id: 'organizadores', name: 'Organizadores' }
]
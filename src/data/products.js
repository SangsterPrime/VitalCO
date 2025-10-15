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
    category: 'huevos-super',
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

  // Accesorios
  {
    id: 'pack_bidones',
    name: 'Rack para bidones',
    description: 'Tapas, picos y sellos.',
    price: 55000,
    category: 'organizadores',
    image: '/images/packforbidones.webp'
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
    id: 'bomba_usb',
    name: 'Bomba eléctrica USB',
    description: 'Recargable, fácil de usar.',
    price: 3990,
    category: 'accesorios',
    image: '/images/bombaUSB.webp'
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
    name: 'Promo #1: 2 recargas + 1 bandeja de huevos 20 unid',
    description: 'Ahorra comprando el combo completo',
    price: 0,
    originalPrice: 11500,
    discountPrice: 10500,
  image: '/Promo1.webp',
    priceText: 'Precio especial: consultar'
  },
  {
    id: 'promo_2',
    name: 'Promo #2: 2 recargas + 1 bandeja de huevos 30 unid',
    description: 'El combo más popular',
    price: 0,
    originalPrice: 13170,
    discountPrice: 12000,
  image: '/Promo2.webp',
    priceText: 'Precio especial: consultar'
  }
]

export const categories = [
  { id: 'todos', name: 'Todos los artículos' },
  { id: 'recargas', name: 'Recargas de agua' },
  { id: 'huevos', name: 'Huevos' },
  { id: 'huevos-super', name: 'Huevos Súper' },
  { id: 'carbon', name: 'Carbón' },
  { id: 'accesorios', name: 'Accesorios' },
  { id: 'dispensadores', name: 'Dispensadores' },
  { id: 'organizadores', name: 'Organizadores' }
]
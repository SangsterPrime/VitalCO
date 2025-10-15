# VitalCO - Distribuidora

Aplicación web de comercio electrónico para VitalCO, migrada de HTML/CSS/JS a React + Vite.

## Características

- ✅ Catálogo de productos con filtros por categoría
- ✅ Carrito de compras con persistencia local
- ✅ Integración con WhatsApp para pedidos
- ✅ Diseño responsivo y mobile-first
- ✅ Notificaciones toast
- ✅ Promociones especiales
- ✅ Gestión de estado con Context API

## Estructura del Proyecto

```
src/
├── components/
│   ├── atoms/           # Componentes básicos
│   ├── molecules/       # Componentes medios
│   │   ├── ProductCard.jsx
│   │   └── Toast.jsx
│   ├── organisms/       # Componentes complejos
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── ProductCatalog.jsx
│   │   ├── Cart.jsx
│   │   └── Footer.jsx
│   └── templates/       # Layouts completos
├── context/
│   └── CartContext.jsx  # Estado global del carrito
├── data/
│   └── products.js      # Datos de productos y categorías
└── styles/
    ├── vitalco.css      # Estilos principales
    └── global.css       # Estilos globales
```

## Instalación y Uso

1. **Instalar dependencias:**
   ```bash
   npm install
   ```

2. **Iniciar servidor de desarrollo:**
   ```bash
   npm run dev
   ```

3. **Construir para producción:**
   ```bash
   npm run build
   ```

## Configuración

### Imágenes
Coloca las imágenes de productos en la carpeta `public/images/` con los nombres correspondientes a los productos en `src/data/products.js`.

### WhatsApp
Actualiza el número de WhatsApp en:
- `src/components/molecules/ProductCard.jsx` (línea 12)
- `src/components/organisms/Cart.jsx` (línea 35)

### Productos
Edita `src/data/products.js` para agregar, modificar o eliminar productos y categorías.

## Funcionalidades Principales

### Carrito de Compras
- Agregar/quitar productos
- Modificar cantidades
- Persistencia en localStorage
- Generación automática de mensaje para WhatsApp

### Filtros de Productos
- Filtrar por categoría
- Mostrar todos los productos
- Conteo dinámico por categoría

### Responsivo
- Optimizado para móviles
- Menú hamburguesa en dispositivos pequeños
- Carrito deslizable

## Tecnologías

- **React 19** - Framework principal
- **Vite** - Build tool y desarrollo
- **Context API** - Gestión de estado
- **CSS Variables** - Sistema de diseño
- **Local Storage** - Persistencia de datos

## Migración desde HTML

Este proyecto fue migrado desde una aplicación HTML/CSS/JS vanilla manteniendo:
- ✅ Toda la funcionalidad original
- ✅ Diseño visual idéntico  
- ✅ Integración con WhatsApp
- ✅ Estructura de componentes React
- ✅ Estado reactivo y optimizado

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

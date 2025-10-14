import { useState, useMemo, useCallback } from 'react'
import Particles from "@tsparticles/react"
import { loadFull } from "tsparticles"
import { products, categories } from '../../data/products'
import ProductCard from '../molecules/ProductCard'

const ProductCatalog = () => {
  const [activeFilter, setActiveFilter] = useState('todos')

  const filteredProducts = useMemo(() => {
    if (activeFilter === 'todos') {
      return products
    }
    return products.filter(product => product.category === activeFilter)
  }, [activeFilter])

  const handleFilterClick = (filterId) => {
    setActiveFilter(filterId)
  }

  // Configuración de partículas
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine)
  }, [])

  const particlesLoaded = useCallback((container) => {
    console.log("Particles loaded:", container)
  }, [])

  const particlesOptions = {
    background: {
      color: {
        value: "transparent", // fondo transparente para que se vea el diseño
      },
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
        onHover: {
          enable: true,
          mode: "repulse",
        },
        resize: true,
      },
      modes: {
        push: {
          quantity: 3,
        },
        repulse: {
          distance: 80,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: ["#3b82f6", "#8b5cf6", "#06b6d4"], // colores azules y morados
      },
      links: {
        color: "#3b82f6",
        distance: 100,
        enable: true,
        opacity: 0.2,
        width: 1,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: false,
        speed: 1.5,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 1000,
        },
        value: 30, // menos partículas para no saturar
      },
      opacity: {
        value: 0.3,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 3 },
      },
    },
    detectRetina: true,
  }

  return (
    <section id="menu" className="py-5" style={{ position: "relative", overflow: "hidden" }}>
      {/* Partículas de fondo */}
      <Particles
        id="catalog-particles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={particlesOptions}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
        }}
      />
      
      {/* Contenido del catálogo */}
      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div className="text-center mb-5">
          <h2 className="display-4 fw-bold mb-3">Catálogo</h2>
          
          {/* Filtros con Bootstrap Pills */}
          <div className="d-flex flex-wrap justify-content-center gap-2 mb-4">
            {categories.map(category => (
              <button
                key={category.id}
                className={`btn ${
                  activeFilter === category.id 
                    ? 'btn-primary' 
                    : 'btn-outline-secondary'
                } btn-sm rounded-pill`}
                onClick={() => handleFilterClick(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Grid de productos */}
        <div className="row g-4" id="listaProductos">
          {filteredProducts.map(product => (
            <div key={product.id} className="col-sm-6 col-lg-4 col-xl-3">
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* Mensaje cuando no hay productos */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-5">
            <div className="text-muted">
              <h5>No se encontraron productos</h5>
              <p>No hay productos disponibles en esta categoría.</p>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default ProductCatalog
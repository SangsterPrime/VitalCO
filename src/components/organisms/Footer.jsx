import { useEffect, useState } from 'react'

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear())

  useEffect(() => {
    setCurrentYear(new Date().getFullYear())
  }, [])

  return (
  <footer className="bg-dark text-light py-4 mt-5 border-top border-secondary position-relative z-1">
      <div className="container">
        <div className="row align-items-center gy-3">
          <div className="col-md-6">
            <h5 className="text-primary">VitalCO</h5>
            <p className="small mb-0">
              <span className="text-light">Distribuidora - Calidad garantizada</span>
            </p>
          </div>
          <div className="col-md-6 text-md-end">
            <div className="d-flex gap-3 justify-content-md-end justify-content-start align-items-center mb-2">
              {/* Instagram */}
              <a
                href="https://instagram.com/vitalco.cl"
                target="_blank"
                rel="noopener noreferrer"
                className="link-light text-decoration-none fs-4"
                aria-label="Ir a Instagram de VitalCO"
                title="Instagram @vitalco.cl"
              >
                <i className="fa-brands fa-instagram" aria-hidden="true"></i>
              </a>
              {/* Facebook */}
              <a
                href="https://facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="link-light text-decoration-none fs-4"
                aria-label="Ir al Facebook de VitalCO"
                title="Facebook"
              >
                <i className="fa-brands fa-facebook" aria-hidden="true"></i>
              </a>
            </div>
            <small className="text-secondary">
              © {currentYear} VitalCO. Todos los derechos reservados.
            </small>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
import { useEffect, useState } from 'react'

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear())

  useEffect(() => {
    setCurrentYear(new Date().getFullYear())
  }, [])

  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h5 className="text-primary">VitalCO</h5>
            <p className="small text-muted">
              Distribuidora Oeste - Calidad garantizada
            </p>
          </div>
          <div className="col-md-6 text-md-end">
            <small className="text-muted">
              © {currentYear} VitalCO. Todos los derechos reservados.
            </small>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
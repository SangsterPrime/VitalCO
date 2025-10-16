import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

// Mapeo simple para usar la sintaxis solicitada: byPrefixAndName.fab['facebook']
const byPrefixAndName = {
  fab: {
    instagram: faInstagram,
    facebook: faFacebook,
    whatsapp: faWhatsapp,
  },
}

const Contact = () => {
  return (
    <section className="py-5" aria-labelledby="contact-heading">
      <div className="container">
        <header className="text-center mb-4">
          <h1 id="contact-heading" className="display-5 fw-bold mb-2">Contáctanos</h1>
          <p className="text-muted text-normal-case mb-0">Síguenos o escríbenos, ¡respondemos rápido!</p>
        </header>

        <div className="row g-4 justify-content-center">
          <div className="col-sm-6 col-md-4">
            <a
              href="https://instagram.com/vitalco.cl"
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none d-block card p-4 text-center"
              aria-label="Abrir Instagram de VitalCO en una nueva pestaña"
            >
              <div className="display-6 mb-2" aria-hidden="true">
                <FontAwesomeIcon className="brand-icon brand-ig" icon={byPrefixAndName.fab['instagram']} />
              </div>
              <div className="h5 mb-1">Instagram</div>
              <div className="text-muted small">@vitalco.cl</div>
            </a>
          </div>

          <div className="col-sm-6 col-md-4">
            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none d-block card p-4 text-center"
              aria-label="Abrir Facebook de VitalCO en una nueva pestaña"
            >
              <div className="display-6 mb-2" aria-hidden="true">
                <FontAwesomeIcon className="brand-icon brand-fb" icon={byPrefixAndName.fab['facebook']} />
              </div>
              <div className="h5 mb-1">Facebook</div>
              <div className="text-muted small">/vitalco</div>
            </a>
          </div>

          <div className="col-sm-6 col-md-4">
            <a
              href="https://wa.me/56988000961?text=Hola! Me interesa información sobre sus productos"
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none d-block card p-4 text-center"
              aria-label="Abrir WhatsApp de VitalCO en una nueva pestaña"
            >
              <div className="display-6 mb-2" aria-hidden="true">
                <FontAwesomeIcon className="brand-icon brand-wa" icon={byPrefixAndName.fab['whatsapp']} />
              </div>
              <div className="h5 mb-1">WhatsApp</div>
              <div className="text-muted small">+56 9 8800 0961</div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

import { useCart } from '../../context/CartContext'

export default function Toast() {
  const { notifications, removeNotification } = useCart()

  if (notifications.length === 0) return null

  const getAlertClass = (type) => {
    switch (type) {
      case 'success': return 'alert-success'
      case 'error': return 'alert-danger'
      case 'warning': return 'alert-warning'
      default: return 'alert-info'
    }
  }

  const getIcon = (type) => {
    switch (type) {
      case 'success': return '✅'
      case 'error': return '❌'
      case 'warning': return '⚠️'
      default: return 'ℹ️'
    }
  }

  return (
    <div className="toast-container" role="region" aria-label="Notificaciones de carrito">
      {notifications.map(notification => (
        <div 
          key={notification.id}
          className={`alert ${getAlertClass(notification.type)} alert-dismissible fade show shadow`}
          role="alert"
          style={{ minWidth: '300px' }}
        >
          <span className="me-2">{getIcon(notification.type)}</span>
          {notification.message}
          <button 
            type="button" 
            className="btn-close" 
            onClick={() => removeNotification(notification.id)}
            aria-label="Cerrar"
          ></button>
        </div>
      ))}
    </div>
  )
}
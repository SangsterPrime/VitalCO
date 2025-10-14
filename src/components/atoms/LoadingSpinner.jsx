import './LoadingSpinner.css'

const LoadingSpinner = ({ size = 'medium', color = 'primary', className = '' }) => {
  const sizeClass = `loading--${size}`
  const colorClass = `loading--${color}`

  return (
    <div className={`loading-container ${className}`}>
      <div className={`loading-spinner ${sizeClass} ${colorClass}`}>
        <div className="loading-spinner__circle"></div>
        <div className="loading-spinner__circle"></div>
        <div className="loading-spinner__circle"></div>
      </div>
    </div>
  )
}

export default LoadingSpinner
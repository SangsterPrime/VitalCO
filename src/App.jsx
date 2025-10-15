import { useEffect } from 'react'
import Header from './components/organisms/Header'
import Cart from './components/organisms/Cart'
import Footer from './components/organisms/Footer'
import Toast from './components/molecules/Toast'
import { CartProvider } from './context/CartContext'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'

function App() {
  // Scroll suave a anclas (/#menu, /#hero) con offset por el header
  const ScrollToHash = () => {
    const { hash, pathname } = useLocation()
    useEffect(() => {
      if (!hash) return
      const id = hash.replace('#', '')
      // esperar a que la vista se renderice
      setTimeout(() => {
        const el = document.getElementById(id)
        if (el) {
          const y = el.getBoundingClientRect().top + window.scrollY - 80
          window.scrollTo({ top: y, behavior: 'smooth' })
        }
      }, 0)
    }, [hash, pathname])
    return null
  }
  return (
    <CartProvider>
      <div className="App min-vh-100 d-flex flex-column">
        <Header />
        <main className="flex-grow-1">
          <ScrollToHash />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contacto" element={<Contact />} />
          </Routes>
        </main>
        <Cart />
        <Footer />
        <Toast />

      </div>
    </CartProvider>
  )
}

export default App

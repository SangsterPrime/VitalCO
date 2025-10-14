import Header from './components/organisms/Header'
import Hero from './components/organisms/Hero'
import ProductCatalog from './components/organisms/ProductCatalog'
import Cart from './components/organisms/Cart'
import Footer from './components/organisms/Footer'
import Toast from './components/molecules/Toast'
import { CartProvider } from './context/CartContext'

function App() {
  return (
    <CartProvider>
      <div className="App min-vh-100 d-flex flex-column">
        <Header />
        <main className="flex-grow-1">
          <Hero />
          <ProductCatalog />
        </main>
        <Cart />
        <Footer />
        <Toast />
      </div>
    </CartProvider>
  )
}

export default App

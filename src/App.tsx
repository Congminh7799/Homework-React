import './App.css'
import Product from './components/Pages/Product'
import Navigation from './components/global/Navbar'
import Link from './types/Link'

function App() {

  const navigation: Link[] = [
    {
      label: 'Home',
      href: '/home',
    },
    {
      label: 'Blog',
      href: '/blog',
    },
    {
      label: 'Category',
      href: '/category',
    },
    {
      label: 'Product',
      href: '/product',
    },
    {
      label: 'Login',
      href: '/login',
    },
    {
      label: 'Customer',
      href: '/customer',
    }
  ];

  return (
    <>
      <Navigation navigation={navigation} />
      <Product />
    </>
  )
}

export default App

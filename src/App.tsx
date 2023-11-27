import './App.css'
import Layout from './components/Layouts'
import Login from './components/Pages/Login'
import NoPage from './components/Pages/NoPage'
import Product from './components/Pages/Product'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();
function App() {

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="*" element={<NoPage />} />
              <Route path="/product" element={<Product />} />
            </Route>
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  )
}

export default App

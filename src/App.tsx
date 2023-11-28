import './App.css'
import Layout from './components/Layouts'
import Login from './components/Pages/Login'
import NoPage from './components/Pages/NoPage'
import Product from './components/Pages/Product'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ProtectedRoute from './auth/ProtectedRoute'
import Home from './components/Pages/Home'

const queryClient = new QueryClient();
function App() {

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/product" element={
                <ProtectedRoute>
                  <Product />
                </ProtectedRoute>}
              />
              <Route path="/home" index element={<Home />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  )
}

export default App

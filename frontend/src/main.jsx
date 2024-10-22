import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <div className='dark:bg-slate-900 dark:text-white'>
      <Navbar/>
      <App/>
      <Footer/>
    </div>
  </BrowserRouter>
)

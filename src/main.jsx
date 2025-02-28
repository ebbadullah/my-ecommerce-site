import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ClerkProvider } from '@clerk/clerk-react'
import ProductProvider from './ProductContext/ProductContext.jsx'
import { ThemeProvider } from '@material-tailwind/react'


const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
    <ProductProvider>
    <ThemeProvider>
      <App />
    </ThemeProvider>
    </ProductProvider>
    </ClerkProvider>
  </BrowserRouter>
)



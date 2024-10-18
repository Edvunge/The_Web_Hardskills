import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Element from './Element.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Element />
  </StrictMode>,
)

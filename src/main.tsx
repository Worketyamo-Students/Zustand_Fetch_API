import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Myline } from './myline.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


const Files = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/myline",
    element: <Myline />
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={Files} />
  </StrictMode>,
)

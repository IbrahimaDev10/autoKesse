import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import  "./assets/style.css";
import Home from './pages/Home'

function App() {
  const router= createBrowserRouter([
    {
      path:"/",
      element:<Layout />,
      children: [
        {
          path:"",
          element:<Home />,
        },
      ]
    },

  ],
      {
    basename: "/autoKesse/", // ← important pour GitHub Pages
  } 
)

  return (
    <RouterProvider router={router} />
  )
}

export default App

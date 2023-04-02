import React from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  Link,
  Outlet
} from 'react-router-dom'
import './style.css'
import Home from './components/Home'
import Reviews from './components/Reviews'
import Articles from './components/Articles'
import Movies from './components/Movies'
import Menu from './components/Menu'
import Movie from './components/Movie'

const App = () => {
  return (
    <div className='container'>
      <Menu />
      <Outlet />
    </div>
  )
}

const ErrorPage = () => {
  return (
    <main className='container'>
      <h1>Chyba 404: tady nic neni</h1>
      <p>Pravdepodobne mate spatny odkaz.</p>
    </main>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/articles',
        element: <Articles />
      },
      {
        path: '/reviews',
        element: <Reviews />
      },
      {
        path: '/movies',
        element: <Movies />,
        children: [
          {
            path: ':id',
            element: <Movie />
          }
        ]
      }
     
    ]
  }
])

createRoot(document.querySelector('#app')).render(
  <RouterProvider router={router} />
)

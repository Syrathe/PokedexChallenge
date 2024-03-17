import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './App.css'
//import App from './App'
import reportWebVitals from './reportWebVitals'
//Redux
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import pokemonListReducer from './features/PokemonList.js'
import offsetReducer from './features/Offset.js'
//React Router
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import DetailedView from './pages/DetailedView'
import NotFound from './pages/NotFound'
//Store
const store = configureStore({
  reducer: {
    pokemonList: pokemonListReducer,
    offset: offsetReducer,
  },
})

const root = ReactDOM.createRoot(document.getElementById('root'))
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: '/Details',
    element: <DetailedView />,
  },
])

root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)
reportWebVitals()

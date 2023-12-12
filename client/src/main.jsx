import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


import './styles/main.scss'

// Page components
import App from './App'
import Home from './components/Home'
import WineryIndex from './components/WineryIndex'
import WinerySingle from './components/WinerySingle'
import WineryCreate from './components/WineryCreate'
import Register from './components/Register'
import Login from './components/Login'
import ErrorPage from './components/ErrorPage'

// Loaders
import { getAllWineries, getSingleWinery } from './utils/loaders/winery'

// Actions
import { registerUser, loginUser } from './utils/actions/auth'
import { createWinery, updateWinery, deleteWinery } from './utils/actions/winery'
import WineryUpdate from './components/WineryUpdate'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: getAllWineries
      },
      {
        path: '/wineryIndex',
        element: <WineryIndex />,
        loader: getAllWineries
      },
      {
        path: '/wineryIndex/:wineryId',
        element: <WinerySingle />,
        loader: async ({ params }) => getSingleWinery(params.wineryId),
        action: async ({ params }) => deleteWinery(params.wineryId)
      },
      {
        path: '/wineryIndex/create',
        element: <WineryCreate />,
        action: async ({ request }) => createWinery(request)
      },
      {
        path: '/wineryIndex/:wineryId/update',
        element: <WineryUpdate />,
        action: async ({ request, params }) => updateWinery(request, params.wineryId),
        loader: async ({ params }) => getSingleWinery(params.wineryId)
      },
      {
        path: '/register',
        element: <Register />,
        action: async ({ request }) => registerUser(request)
      },
      {
        path: '/login',
        element: <Login />,
        action: async ({ request }) => loginUser(request)
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)

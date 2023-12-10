import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


import './styles/main.scss'

// Page components
import App from './App'
import Home from './components/Home'
import WineryIndex from './components/WineryIndex'
import WinerySingle from './components/WinerySingle'
import Register from './components/Register'
import Login from './components/Login'
import ErrorPage from './components/ErrorPage'
import UserIcon from './components/UserPage'

// Loaders
import { getAllWineries, getSingleWinery } from './utils/loaders/winery'

// Actions
import { registerUser, loginUser } from './utils/actions/auth'

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
        loader: async ({ params }) => getSingleWinery(params.wineryId)
      },      {
        path: '/register',
        element: <Register />,
        action: async ({ request }) => registerUser(request)
      },
      {
        path: '/login',
        element: <Login />,
        action: async ({ request }) => loginUser(request)
      },
      {
        path: '/user',
        element: <UserIcon />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)

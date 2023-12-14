import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
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
import Rick from './components/Rick'
import Profile from './components/Profile'
// Loaders
import { getAllWineries, getSingleWinery } from './utils/loaders/winery'

// Actions
import { registerUser, loginUser } from './utils/actions/auth'
import { createOrDeleteReview, createWinery, updateOrDeleteWinery } from './utils/actions/winery'
import WineryUpdate from './components/WineryUpdate'
import { getSingleUser } from './utils/loaders/users'

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
        action: async ({ request, params }) => createOrDeleteReview(request, params.wineryId, params.reviewId)
      },
      {
        path: '/wineryIndex/create',
        element: <WineryCreate />,
        action: async ({ request }) => createWinery(request)
      },
      {
        path: '/wineryIndex/:wineryId/update',
        element: <WineryUpdate />,
        action: async ({ request, params }) => updateOrDeleteWinery(request, params.wineryId),
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
      },
      {
        path: '/rick',
        element: <Rick />
      },
      {
        path: '/profile',
        element: <Profile />,
        loader: getSingleUser
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)

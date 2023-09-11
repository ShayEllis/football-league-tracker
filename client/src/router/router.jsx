import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Dashboard from '../components/dashboard/dashboard'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'Dashboard',
        element: <Dashboard />,
      },
    ],
  },
])

export { router }
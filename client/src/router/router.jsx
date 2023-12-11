import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Dashboard from '../components/dashboard/dashboard'
import { TeamBuilder } from '../components/teamBuilder/teamBuilder'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'Dashboard',
        element: <Dashboard />,
      },
      {
        path: 'TeamBuilder',
        element: <TeamBuilder />,
      },
    ],
  },
])

export { router }

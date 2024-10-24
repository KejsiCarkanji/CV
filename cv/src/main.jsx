import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter} from 'react-router-dom'
import PersonalDetails from './pages/PersonalDetails.jsx'
import Education from './pages/Education.jsx'
import WorkExperience from './pages/WorkExperience.jsx'
import Cv from './pages/Cv.jsx'
import Home from './pages/Home.jsx'

 const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/personal-details',
    element: <PersonalDetails />
  },
  {
    path: '/education',
    element: <Education />
  },
  {
    path: '/work-experience',
    element: <WorkExperience />
  },
  {
    path: '/cv',
    element: <Cv />
  }
 ])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

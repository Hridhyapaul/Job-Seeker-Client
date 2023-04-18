import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home';
import Statistics from './Components/Statistics';
import AppliedJobs from './Components/AppliedJobs';
import Blog from './Components/Blog';
import JobDetails from './Components/JobDetails';
import ErrorPage from './Components/ErrorPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('/jobcircular.json')
      },
      {
        path: '/job/:id',
        element: <JobDetails></JobDetails>,
        loader: () => fetch('/jobcircular.json')
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      },
      {
        path: '/appliedJob',
        element: <AppliedJobs></AppliedJobs>,
        loader: () => fetch('/jobcircular.json')
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

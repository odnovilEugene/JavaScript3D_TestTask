import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Cone3D } from './pages/Cone3D/Cone3D.tsx'
import { ErrorPage } from './pages/ErrorPage/ErrorPage.tsx'
import './index.css'
import {FormPage} from "./pages/FormPage/FormPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <FormPage/>,
    errorElement: <ErrorPage/>,
  },
  {
    path: "/cone",
    element: <Cone3D/>,
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

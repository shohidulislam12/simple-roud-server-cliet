import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import Users from './Component/Users';
import Update from './Update';
const router = createBrowserRouter([
  {
    path: "/",
    element:<App></App>
  },
  {
    path: "users",
    element:<Users></Users>,
    loader:()=>fetch('http://localhost:3000/users')
  },
  {
    path: "/update/:id",
    element:<Update></Update>,
    loader:({params})=>fetch(`http://localhost:3000/users/${params.id}`)
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)

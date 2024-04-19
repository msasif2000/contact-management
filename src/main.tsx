import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import AddContact from './Pages/AddContact/AddContact';
import AllContacts from './Pages/AllContacts/AllContacts';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/addContact",
        element: <AddContact />
      },
      {
        path: "/allContacts",
        element: <AllContacts />
      },
      {
        path: "/contact",
        element: <h1>Contact</h1>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

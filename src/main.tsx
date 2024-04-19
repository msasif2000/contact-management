
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
import ThemeProvider from './Providers/ThemePovider';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Login from './Pages/Auth/Login';
import Signup from './Pages/Auth/Signup';
import EditContact from './Pages/EditContact/EditContact';
import Home from './Pages/Home/Home';
import PrivateRoute from './Providers/PrivateRoute';
const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />

      }, {
        path: "/login",
        element: <Login />
      },
      {
        path: "/signup",
        element: <Signup />
      },
      {
        path: "/addContact",
        element: <PrivateRoute><AddContact /></PrivateRoute>
      },
      {
        path: "/allContacts",
        element: <PrivateRoute><AllContacts/></PrivateRoute>
      },
      {
        path: "/editContact/:id",
        element: <PrivateRoute><EditContact /></PrivateRoute>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </QueryClientProvider>
)

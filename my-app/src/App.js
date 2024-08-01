// import logo from './logo.svg';
import './App.css';
import Contact from './contact/contact.js';
import Home from './home/home.js';
// import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import AddCars from './mainBody/AddCars/addCars.js';
import DisplayCars from './mainBody/displayCars/displayCars.js';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './header/header.js';
import AdminPage from './AdminPage/Admin.js';
import Name from './newComponent.js';
function App() {
  const router = createBrowserRouter(
    [ 
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/addCars",
      element: <AddCars />,
    },
    {
      path: "/AdminPage",
      element: <AdminPage />,
    },
    {
      path: "/Contact",
      element: <Contact />,
    },
    {
      path: "/name",
      element: <Name />,
    },
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

//hi
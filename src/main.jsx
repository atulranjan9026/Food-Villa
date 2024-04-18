import React from 'react'
import ReactDOM from 'react-dom/client'
import "./App.css"
import './index.css'
import { createBrowserRouter, RouterProvider,Outlet } from 'react-router-dom'
import Footer from './components/Footer.jsx'
import About from "./components/About";
import Cart from "./components/Cart";
import Contact from "./components/Contact";
import Header from './components/Header.jsx'
import Body from "./components/Body.jsx"
import RestaurantsMenu from './components/RestaurantsMenu.jsx'

const AppLayout =()=>{
  return(<>
  <Header/>
  <Outlet/>
  <Footer/>
  </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantsMenu />,
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <RouterProvider router={appRouter}>
    <AppLayout />
  </RouterProvider>
);

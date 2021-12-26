import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import BrandsList from "./components/BrandsList/BrandsList";
import Cart from "./components/Cart/Cart";
import DetailsProduct from "./components/DetailsProduct/DetailsProduct";
import EditProduct from "./components/EditProduct/EditProduct";
import Home from "./components/Home/Home";
import ProductsList from "./components/ProductsList/ProductsList";
import { useAuth } from "./contexts/authContext";
import AdminPage from "./components/pages/AdminPage";
// import Error404 from "./pages/Error404";
import Error404 from "./components/pages/Error404";
import Paym from "./components/Cart/Paym";
import Favorites from "./components/Favorites/Favorites";
import PayForm from "./components/Cart/PayForm";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import ChatDone from "./components/Chat/ChatDone";

const Routing = () => {
  let PUBLIC_ROUTES = [
    {
      link: "/",
      element: <Home />,
      id: 1,
    },
    {
      link: "/shop",
      element: <ProductsList />,
      id: 2,
    },

    {
      link: "/brands",
      element: <BrandsList />,
      id: 4,
    },
    {
      link: "/shop/:id",
      element: <DetailsProduct />,
      id: 5,
    },
    {
      link: "/cart",
      element: <Cart />,
      id: 6,
    },
    {
      link: "/pay",
      element: <PayForm />,
      id: 7,
    },
    {
      link: "/paym",
      element: <Paym />,
      id: 8,
    },
    {
      link: "/favorites",
      element: <Favorites />,
      id: 9,
    },
    {
      link: "/chat",
      element: <ChatDone />,
      id: 10,
    },
    {
      link: "/forgotPassword",
      element: <ForgotPassword />,
      id: 11,
    },
  ];
  const ADMIN_ROUTES = [
    {
      link: "/admin",
      element: <AdminPage />,
      id: 1,
    },
    {
      link: "/edit/:id",
      element: <EditProduct />,
      id: 2,
    },
  ];
  const { user } = useAuth();
  return (
    <Routes>
      {PUBLIC_ROUTES.map((item) => (
        <Route path={item.link} element={item.element} />
      ))}
      {user
        ? ADMIN_ROUTES.map((item) => (
            <Route
              path={item.link}
              element={
                user.email === "qwerty@gmail.com" ? (
                  item.element
                ) : (
                  <Navigate replace to="*" />
                )
              }
            />
          ))
        : null}
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
};

export default Routing;
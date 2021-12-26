import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";

import AuthContextProvider from "./contexts/authContext";
import ProductsContextProvider from "./contexts/productsContext";
import BrandsContextProvider from "./contexts/brandsContext";
import CartContextProvider from "./contexts/cartContext";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

import Routing from "./Routing";

import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";
import "./App.css";
import FavoritesContextProvider from "./contexts/favoritesContext";
import ModelsContextProvider from "./contexts/modelsContext";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme, GlobalStyles } from "./theme";
// import ContactUs from "./components/ContactUs/ContactUs";

const App = () => {
  const [theme, setTheme] = useState("light");

  const switchTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <AuthContextProvider>
        <FavoritesContextProvider>
          <CartContextProvider>
            <BrandsContextProvider>
              <ModelsContextProvider>
                <ProductsContextProvider>
                  <BrowserRouter>
                    <Header />
                    <Routing />
                    <button
                      style={{
                        borderRadius: "5px",
                        backgroundColor: "#6cace4",
                        border: "0px",                       
                      }}
                      onClick={switchTheme}
                    >
                      Change Theme
                    </button>
                    {/* <ContactUs /> */}
                    <Footer />
                  </BrowserRouter>
                </ProductsContextProvider>
              </ModelsContextProvider>
            </BrandsContextProvider>
          </CartContextProvider>
        </FavoritesContextProvider>
      </AuthContextProvider>
    </ThemeProvider>
  );
};

export default App;

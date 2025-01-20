import React, { Suspense, lazy, useState } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Form from './form/Form';
const Products = lazy(() => import("./Products"));
const About = lazy(() => import("./About"));
const Home = lazy(() => import("./Home"));
const Contact = lazy(() => import("./Contact"));
const Cart = lazy(() => import("./Cart"));
const SingleProduct = lazy(() => import("./SingleProduct"));
const ErrorPage = lazy(() => import("./ErrorPage"));

const App = () => {
  const theme = {
    colors: {
      heading: "rgb(24 24 29)",
      text: "rgba(29 ,29, 29, .8)",
      white: "#fff",
      black: "#212529",
      helper: "#8490ff",
      bg: "#F6F8FA",
      footer_bg: "#0a1435",
      btn: "rgb(98 84 243)",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#ffffff",
      gradient: "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: {
      mobile: "768px",
      tab: "998px",
    },
  };

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const handleLogin = (username, password) => {
    if (username === "user" && password === "password") {
      setIsLoggedIn(true);
      navigate("/home"); 
    } else {
      alert("Invalid login credentials");
    }
  };

  // Use location to conditionally render Header and Footer
  const location = useLocation();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle /> {/* Global Styles should be outside of Routes */}

      {/* Conditionally render Header and Footer */}
      {location.pathname !== "/" && <Header />}

      <Suspense fallback={<div>Loading...</div>}>
        {/* Define all routes inside <Routes> */}
        <Routes>
          {/* Form is the initial route */}
          <Route exact path="/" element={<Form onLogin={handleLogin} />} />
          
          {/* Only render Home if the user is logged in */}
          <Route exact path="/home" element={<Home />} />
          
          {/* Other routes */}
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/singleproduct/:id" element={<SingleProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Suspense>

      {/* Only render Footer for non-form routes */}
      {location.pathname !== "/" && <Footer />}
    </ThemeProvider>
  );
};

export default App;





























import { useState } from "react";

import Header from "./components/header/header-component";
import Home from "./pages/home/home-page";
import Login from "./pages/login/login-page";
import SignUp from "./pages/signup/signup-component";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Checkout from "./pages/checkout/checkout-page";

const App = () => {
  const [toggleCart, setToggleCart] = useState(false);

  const handleToggleCart = () => {
    setToggleCart(!toggleCart);
  };

  return (
    <BrowserRouter>
      <Header handleToggleCart={handleToggleCart} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;

import { useState } from "react";

import Header from "./components/header/header-component";
import Home from "./pages/home/home-page";
import Login from "./pages/login/login-page";
import SignUp from "./pages/signup/signup-component";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Checkout from "./pages/checkout/checkout-page";
import Cart from "./components/cart/cart-component";
import CategoryDetails from "./pages/category-details/category-details-page";
import Explore from "./pages/explore/explore-page";

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
        <Route path="/explore" element={<Explore />} />
        <Route path="/category/:categoryId" element={<CategoryDetails />} />
      </Routes>
      <Cart handleToggleCart={handleToggleCart} toggleCart={toggleCart} />
    </BrowserRouter>
  );
};
export default App;

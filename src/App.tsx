import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import Header from "./components/header/header-component";
import Home from "./pages/home/home-page";
import Login from "./pages/login/login-page";
import SignUp from "./pages/signup/signup-component";
import Checkout from "./pages/checkout/checkout-page";
import Explore from "./pages/explore/explore-page";

import Cart from "./components/cart/cart-component";
import CategoryDetails from "./pages/category-details/category-details-page";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "./firebase/firebase.config";
import { useUserContext } from "./contexts/user";
import { collection, getDocs, query, where } from "firebase/firestore";
import { userConverter } from "./converters/firestore-converters";

const App = () => {
  const { loginUser, logoutUser, isAuthenticated } = useUserContext();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      const isSigningOut = isAuthenticated && !user;
      if (isSigningOut) {
        logoutUser();
        setIsLoading(false);
        return;
      }

      const isSigningIn = !isAuthenticated && user;
      if (isSigningIn) {
        const q = query(
          collection(db, "users").withConverter(userConverter),
          where("id", "==", user.uid)
        );
        const querySnapshot = await getDocs(q);

        const userFromFireStore = querySnapshot.docs[0]?.data();

        loginUser(userFromFireStore);
        setIsLoading(false);
        return;
      }

      return setIsLoading(false);
    });
  }, [isAuthenticated, loginUser, logoutUser]);

  if (isLoading) {
    return <p>Carregando...</p>;
  }

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/category/:categoryId" element={<CategoryDetails />} />
      </Routes>
      <Cart />
    </BrowserRouter>
  );
};
export default App;

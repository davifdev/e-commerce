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
import { collection, getDocs, query, where } from "firebase/firestore";
import { userConverter } from "./converters/firestore-converters";
import Loading from "./components/loading/loading-component";
import { useDispatch } from "react-redux";
import { loginUser, logoutUser } from "./store/toolkit/user/user.slice";
import { useAppSelector } from "./hooks/redux.hooks";

import PaymentConfirmation from "./pages/payment-confirmation/payment-confirmation-component";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  const { isAuthenticated } = useAppSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      const isSigningOut = isAuthenticated && !user;
      if (isSigningOut) {
        dispatch(logoutUser());
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

        dispatch(loginUser(userFromFireStore));
        setIsLoading(false);
        return;
      }

      return setIsLoading(false);
    });
  }, [dispatch, isAuthenticated]);

  if (isLoading) {
    return <Loading />;
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
        <Route path="/payment-confirmation" element={<PaymentConfirmation />} />
      </Routes>
      <Cart />
    </BrowserRouter>
  );
};
export default App;

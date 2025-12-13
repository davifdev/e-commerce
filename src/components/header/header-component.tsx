import { MdOutlineShoppingCart } from "react-icons/md";

import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  HeaderComponent,
  HeaderItem,
  HeaderItems,
  HeaderNavigation,
} from "./header.styles";
import { IconContainer } from "../button/button.styles";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase.config";
import type { MouseEvent } from "react";

import { useAppSelector } from "../../hooks/redux.hooks";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../store/reducers/user/user.actions";
import { cartToggle } from "../../store/toolkit/cart/cart.slice";
import { selectItemsCartLength } from "../../store/reducers/cart/cart.selectors";

const Header = () => {
  const { currentUser } = useAppSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignout = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    signOut(auth);
    dispatch(logoutUser());
    navigate("/");
  };

  const itemsCartQuantity = useAppSelector(selectItemsCartLength);

  return (
    <HeaderComponent>
      <Link to="/">
        <h1>Club Clothing</h1>
      </Link>
      <HeaderNavigation>
        <HeaderItems>
          <HeaderItem>
            <NavLink to="/explore">Explorar</NavLink>
          </HeaderItem>
          {currentUser && (
            <HeaderItem>
              <NavLink
                to="/signup"
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={handleSignout}
              >
                Sair
              </NavLink>
            </HeaderItem>
          )}
          {!currentUser && (
            <HeaderItem>
              <NavLink
                to="/login"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Login
              </NavLink>
            </HeaderItem>
          )}
          {!currentUser && (
            <HeaderItem>
              <NavLink
                to="/signup"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Criar Conta
              </NavLink>
            </HeaderItem>
          )}
        </HeaderItems>
        <button
          style={{
            color: "#f8f9fa",
            display: "flex",
            alignItems: "center",
          }}
          onClick={() => dispatch(cartToggle())}
        >
          <IconContainer>
            <MdOutlineShoppingCart size={24} />
          </IconContainer>
          {itemsCartQuantity}
        </button>
      </HeaderNavigation>
    </HeaderComponent>
  );
};

export default Header;

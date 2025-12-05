import { MdOutlineShoppingCart } from "react-icons/md";

import { Link, NavLink } from "react-router-dom";
import {
  HeaderComponent,
  HeaderItem,
  HeaderItems,
  HeaderNavigation,
} from "./header.styles";
import { IconContainer } from "../button/button.styles";
import { useUserContext } from "../../contexts/user";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase.config";
import type { MouseEvent } from "react";
import { useCartContext } from "../../contexts/cart";

const Header = () => {
  const { currentUser, logoutUser } = useUserContext();
  const { handleVisibleIsCart, itemsCartLength } = useCartContext();

  const handleSignout = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    signOut(auth);
    logoutUser();
  };

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
          onClick={handleVisibleIsCart}
        >
          <IconContainer>
            <MdOutlineShoppingCart size={24} />
          </IconContainer>
          {itemsCartLength}
        </button>
      </HeaderNavigation>
    </HeaderComponent>
  );
};

export default Header;

import { MdOutlineShoppingCart } from "react-icons/md";

import { Link, NavLink } from "react-router-dom";
import {
  HeaderComponent,
  HeaderItem,
  HeaderItems,
  HeaderNavigation,
} from "./header.styles";
import { IconContainer } from "../button/button.styles";

interface HeaderProps {
  handleToggleCart: () => void;
}

const Header = ({ handleToggleCart }: HeaderProps) => {
  return (
    <HeaderComponent>
      <Link to="/">
        <h1>Club Clothing</h1>
      </Link>
      <HeaderNavigation>
        <HeaderItems>
          <HeaderItem>
            <NavLink to="">Explorar</NavLink>
          </HeaderItem>
          <HeaderItem>
            <NavLink
              to="/login"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Login
            </NavLink>
          </HeaderItem>
          <HeaderItem>
            <NavLink
              to="/signup"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Criar Conta
            </NavLink>
          </HeaderItem>
        </HeaderItems>
        <button
          style={{
            color: "#f8f9fa",
            display: "flex",
            alignItems: "center",
          }}
          onClick={handleToggleCart}
        >
          <IconContainer>
            <MdOutlineShoppingCart size={24} />
          </IconContainer>
          5
        </button>
      </HeaderNavigation>
    </HeaderComponent>
  );
};

export default Header;

import { Link, NavLink } from "react-router-dom";
import {
  HeaderComponent,
  HeaderItem,
  HeaderItems,
  HeaderNavigation,
} from "./header.styles";

const Header = () => {
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
        <button style={{ color: "#f8f9fa" }}>5</button>
      </HeaderNavigation>
    </HeaderComponent>
  );
};

export default Header;

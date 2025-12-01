import {
  HeaderComponent,
  HeaderItem,
  HeaderItems,
  HeaderNavigation,
} from "./header.styles";

const Header = () => {
  return (
    <HeaderComponent>
      <a href="/">
        <h1>Club Clothing</h1>
      </a>
      <HeaderNavigation>
        <HeaderItems>
          <HeaderItem>
            <a href="#">Explorar</a>
          </HeaderItem>
          <HeaderItem>
            <a href="#">Login</a>
          </HeaderItem>
          <HeaderItem>
            <a href="#">Criar Conta</a>
          </HeaderItem>
        </HeaderItems>
        <button style={{ color: "#f8f9fa" }}>5</button>
      </HeaderNavigation>
    </HeaderComponent>
  );
};

export default Header;

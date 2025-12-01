import styled from "styled-components";

export const HeaderComponent = styled.header`
  background-color: #212529;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  width: 100%;
  h1 {
    color: #f8f9fa;
  }
`;

export const HeaderNavigation = styled.nav`
  display: flex;
  align-items: center;
  gap: 40px;
`;

export const HeaderItems = styled.ul`
  display: flex;
  gap: 40px;
`;

export const HeaderItem = styled.li``;

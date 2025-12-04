import styled from "styled-components";
import Colors from "../../themes/theme.colors";

export const CategoryContainer = styled.div`
  padding-top: 78px;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 20px;
`;

export const CategoryTitle = styled.a`
  font-size: 21px;
  font-weight: 500;
  margin-bottom: 5px;
  color: ${Colors.primary};

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

export const ProductsContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    grid-row-gap: 20px;
  }
`;

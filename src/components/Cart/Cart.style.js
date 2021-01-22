import styled from "styled-components";

export const CartBlock = styled.div`
  position: fixed;
  background: #f6f6f8;
  width: 330px;
  top: 73px;
  bottom: 0;
  box-sizing: border-box;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.13);
  overflow-y: auto;

  span {
    font-size: 0.8em;
    font-weight: 600;
  }

  @media (max-width: ${({ theme }) => theme.laptop}) {
    display: ${({ open }) => (open ? "block" : "none")};
  }
`;

export const ProductsBlock = styled.div`
  height: calc(100% - 100px);
  padding: 20px 16px;
  box-sizing: border-box;
`;

export const BuyBlock = styled.div`
  display: flex;
  padding: 30px 15px 20px 15px;
  background: #fff;
  box-sizing: border-box;
`;

export const ButtonBlock = styled.div`
  height: 50px;
  flex: 4;
  opacity: 0.5;
  font-size: 1.2em;
`;

export const PriceBlock = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-left: 30px;

  span:nth-child(1) {
    font-size: 0.75em;

    img {
      float: right;
      width: 12px;
    }
  }

  span:nth-child(2) {
    font-size: 1.2em;
    font-weight: 600;
  }
`;

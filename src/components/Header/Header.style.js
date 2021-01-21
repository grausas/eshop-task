import styled from "styled-components";

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: #fff;
  border-bottom: 1px solid #e6e6e6;
  z-index: 100;
  box-sizing: border-box;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1340px;
  width: 100%;
  margin: 0 auto;
`;

export const MainBlock = styled.div``;

export const SideBlock = styled.div`
  display: flex;
  max-width: 340px;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.laptop}) {
    flex-direction: row-reverse;
    width: 0;
  }
`;

export const Cart = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  min-height: 42px;
  border: 1px solid #d9d9d9;
  border-radius: 25px;
  padding: 0 16px;

  @media (max-width: ${({ theme }) => theme.laptop}) {
    border: none;
  }
`;

export const CartImage = styled.img`
  height: 20px;
`;

export const Price = styled.span`
  font-weight: 700;
  font-size: 0.8em;
  line-height: 16px;
  margin-left: 0.8em;
`;

export const Logo = styled.img`
  max-height: 70px;
  padding-left: 10px;

  @media (max-width: ${({ theme }) => theme.laptop}) {
    max-height: 50px;
  }
`;

export const ItemCount = styled.div`
  position: absolute;
  left: 25%;
  top: 5%;
  padding: 3px 3px;
  font-weight: 600;
  background: #e22e39;
  color: #fff;
  width: 14px;
  height: 14px;
  text-align: center;
  line-height: 14px;
  font-size: 14px;
  border-radius: 10px;
  z-index: 999;

  @media (max-width: ${({ theme }) => theme.laptop}) {
    display: none;
  }
`;

import styled from "styled-components";

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: #fff;
  padding: 0 10px;
  border-bottom: 1px solid #e6e6e6;
  z-index: 100;
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
  max-width: 100%;
`;

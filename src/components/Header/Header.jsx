import React, { useContext } from "react";
import * as S from "./Header.style";
import { Link } from "react-router-dom";
import logoImg from "../../assets/logo.png";
import cartImg from "../../assets/cart-desktop.png";
import { CartContext } from "../../contexts/cart.context";

function Header() {
  const cart = useContext(CartContext);

  return (
    <S.Header>
      <S.Container>
        <S.MainBlock>
          <Link to="/">
            <S.Logo src={logoImg} alt="Barbora" />
          </Link>
        </S.MainBlock>
        <S.SideBlock>
          <S.Cart>
            <S.CartImage src={cartImg} alt="Cart" />
            <S.Price>€0.00</S.Price>
            {cart.products.length > 0 && (
              <S.ItemCount>{cart.products.length}</S.ItemCount>
            )}
          </S.Cart>
        </S.SideBlock>
      </S.Container>
    </S.Header>
  );
}

export default Header;

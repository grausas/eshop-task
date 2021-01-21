import React from "react";
import * as S from "./Header.style";
import { Link } from "react-router-dom";
import logoImg from "../../assets/logo.png";
import cart from "../../assets/cart-desktop.png";

function Header() {
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
            <S.CartImage src={cart} alt="Cart" />
            <S.Price>€0,00</S.Price>
            <S.ItemCount>1</S.ItemCount>
          </S.Cart>
        </S.SideBlock>
      </S.Container>
    </S.Header>
  );
}

export default Header;

import React, { useContext, useState, useEffect } from "react";
import * as S from "./Header.style";
import { Link } from "react-router-dom";
import logoImg from "../../assets/logo.png";
import cartImg from "../../assets/cart-desktop.png";
import baksetImg from "../../assets/basket.png";
import { CartContext } from "../../contexts/cart.context";

function Header() {
  const { cart, totalAmount, openSidebar } = useContext(CartContext);
  const [price, setPrice] = useState();

  useEffect(() => {
    if (cart) {
      setPrice(totalAmount(cart));
    }
  }, [cart, totalAmount]);

  return (
    <S.Header>
      <S.Container>
        <S.MainBlock>
          <Link to="/">
            <S.Logo src={logoImg} alt="Barbora" />
          </Link>
        </S.MainBlock>
        <S.SideBlock>
          <S.Cart onClick={openSidebar}>
            <S.CartImage src={cartImg} alt="Cart" className="desktop" />
            <S.CartImage src={baksetImg} alt="Basket" className="laptop" />
            <S.Price>
              €{price ? price.toString().replace(/\./g, ",") : "0,00"}
            </S.Price>
            {cart.length > 0 && <S.ItemCount>{cart.length}</S.ItemCount>}
          </S.Cart>
        </S.SideBlock>
      </S.Container>
    </S.Header>
  );
}

export default Header;

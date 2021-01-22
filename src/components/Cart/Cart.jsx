import React from "react";
import * as S from "./Cart.style";
import { Button } from "../index";
import info from "../../assets/info.svg";

function Cart({ open }) {
  return (
    <S.CartBlock open={open}>
      <S.ProductsBlock>
        <span>Krepšelis</span>
      </S.ProductsBlock>
      <S.BuyBlock>
        <S.ButtonBlock>
          <Button color="primary">Pirkti</Button>
        </S.ButtonBlock>
        <S.PriceBlock>
          <span>
            Kaina
            <img src={info} alt="" />
          </span>
          <span>€0,00</span>
        </S.PriceBlock>
      </S.BuyBlock>
    </S.CartBlock>
  );
}

export default Cart;

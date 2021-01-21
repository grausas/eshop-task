import React from "react";
import * as S from "./Cart.style";

function Cart({ open }) {
  return (
    <S.CartBlock open={open}>
      <span>Krepšelis</span>
    </S.CartBlock>
  );
}

export default Cart;

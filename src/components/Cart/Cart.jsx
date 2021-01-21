import React from "react";
import * as S from "./Cart.style";

function Cart({ open }) {
  return <S.CartBlock open={open}>Krepšelis</S.CartBlock>;
}

export default Cart;

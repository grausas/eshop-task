import React, { useContext, useState, useEffect } from "react";
import * as S from "./Cart.style";
import { Button, ProductInCart } from "../index";
import info from "../../assets/info.svg";
import { CartContext } from "../../contexts/cart.context";

function Cart() {
  const { cart, totalAmount, isSidebarOpen } = useContext(CartContext);
  const [price, setPrice] = useState();

  useEffect(() => {
    if (cart) {
      setPrice(totalAmount(cart));
    }
  }, [cart, totalAmount]);

  return (
    <>
      <S.CartBlock isSidebarOpen={isSidebarOpen}>
        <S.ProductsBlock>
          {cart.length ? (
            <>
              <span>Krepšelis</span> <ProductInCart data={cart} />
            </>
          ) : (
            <S.EmptyCart>Krepšelis tuščias</S.EmptyCart>
          )}
        </S.ProductsBlock>
        <S.BuyBlock>
          <S.ButtonBlock>
            <Button color="primary">Pirkti</Button>
          </S.ButtonBlock>
          <S.PriceBlock>
            <span>
              Kaina
              <img src={info} alt="info" />
            </span>
            <span>
              €{price ? price.toString().replace(/\./g, ",") : "0,00"}
            </span>
          </S.PriceBlock>
        </S.BuyBlock>
      </S.CartBlock>
    </>
  );
}

export default Cart;

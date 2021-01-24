import React, { useContext } from "react";
import * as S from "./ProductInCart.style";
import { QuantityButton } from "../index";
import deleteIcon from "../../assets/delete.svg";
import { CartContext } from "../../contexts/cart.context";

function ProductInCart({ data }) {
  const {
    cart,
    deleteFromCart,
    isSidebarOpen,
    addToCart,
    decreaseFromCart,
  } = useContext(CartContext);
  return (
    <>
      {data &&
        data.map((item, index) => (
          <S.ProductBlock key={index}>
            <S.ProductImage src={item.image} alt="Product" />
            <S.DeleteIcon
              src={deleteIcon}
              onClick={() => deleteFromCart(item)}
            />
            <S.InfoBlock>
              <S.ProductTitle>
                <span>{item.title}</span>
              </S.ProductTitle>
              <S.ProductDetails>
                {isSidebarOpen ? (
                  item.quantity &&
                  cart.map((product) => item.id === product.id) ? (
                    <QuantityButton
                      handleIncrease={() => addToCart(item)}
                      handleDecrease={() => decreaseFromCart(item)}
                      quantity={item.quantity}
                    />
                  ) : null
                ) : (
                  <span>{item.quantity} vnt.</span>
                )}
                <span>
                  €
                  {(item.price * item.quantity)
                    .toFixed(2)
                    .toString()
                    .replace(/\./g, ",")}
                </span>
              </S.ProductDetails>
            </S.InfoBlock>
          </S.ProductBlock>
        ))}
    </>
  );
}

export default ProductInCart;

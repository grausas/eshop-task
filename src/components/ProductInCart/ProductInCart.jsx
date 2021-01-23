import React, { useContext } from "react";
import * as S from "./ProductInCart.style";
import deleteIcon from "../../assets/delete.svg";
import { CartContext } from "../../contexts/cart.context";

function ProductInCart({ data }) {
  const { deleteFromCart } = useContext(CartContext);
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
                <span>{item.quantity} vnt.</span>
                <span>€{(item.price * item.quantity).toFixed(2)}</span>
              </S.ProductDetails>
            </S.InfoBlock>
          </S.ProductBlock>
        ))}
    </>
  );
}

export default ProductInCart;

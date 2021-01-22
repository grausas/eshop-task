import React, { useContext } from "react";
import { Button } from "../index";
import * as S from "./Product.style";
import like from "../../assets/like.png";
import { products } from "../../utils/productsData";
import { CartContext } from "../../contexts/cart.context";

function Product({ className }) {
  const { addToCart } = useContext(CartContext);

  return (
    <>
      {products &&
        products.map((product) => (
          <S.ProductBlock key={product.id} className={className}>
            <S.Product>
              <S.Favorite src={like} />
              <S.ProductImage src={product.image} alt="Product image" />
              <S.ProductTitle>{product.title}</S.ProductTitle>
              <S.ProductPrice>€{product.price}</S.ProductPrice>
              <S.ButtonBlock>
                {products.id ? (
                  "none"
                ) : (
                  <Button handleClick={() => addToCart(product)}>
                    Į krepšelį
                  </Button>
                )}
              </S.ButtonBlock>
            </S.Product>
          </S.ProductBlock>
        ))}
    </>
  );
}

export default Product;

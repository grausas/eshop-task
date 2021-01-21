import React from "react";
import { Button } from "../index";
import * as S from "./Product.style";
import like from "../../assets/like.png";
import { products } from "../../utils/productsData";

function Product() {
  return (
    <>
      {products &&
        products.map((product) => (
          <S.ProductBlock key={product.id}>
            <S.Product>
              <S.Favorite src={like} />
              <S.ProductImage src={product.image} alt="Product image" />
              <S.ProductTitle>{product.title}</S.ProductTitle>
              <S.ProductPrice>€{product.price}</S.ProductPrice>
              <S.ButtonBlock>
                <Button>Į krepšelį</Button>
              </S.ButtonBlock>
            </S.Product>
          </S.ProductBlock>
        ))}
    </>
  );
}

export default Product;

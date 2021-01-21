import React from "react";
import { Button } from "../index";
import * as S from "./Product.style";
import like from "../../assets/like.png";

function Product() {
  return (
    <>
      <S.ProductBlock>
        <S.Product>
          <S.Favorite src={like} />
          <S.ProductImage
            src="https://www.barbora.lt/api/images/GetInventoryImage?id=eb5439ea-7893-4b46-874e-598204d70bfa"
            alt=""
          />
          <S.ProductTitle>
            Tirpiosios kavos gėrimas JACOBS 3 IN 1 (20 x 15,2 g), 20 vnt.
          </S.ProductTitle>
          <S.ProductPrice>€2,49</S.ProductPrice>
          <S.ButtonBlock>
            <Button>Į krepšelį</Button>
          </S.ButtonBlock>
        </S.Product>
      </S.ProductBlock>
    </>
  );
}

export default Product;

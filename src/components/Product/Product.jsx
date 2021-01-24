import React, { useContext } from "react";
import { Button, QuantityButton } from "../index";
import * as S from "./Product.style";
import { products } from "../../utils/productsData";
import likeIcon from "../../assets/like.png";
import { CartContext } from "../../contexts/cart.context";

function Product({ data, className }) {
  const { cart, addToCart, decreaseFromCart } = useContext(CartContext);

  return (
    <>
      {products &&
        products.map((product) => (
          <S.ProductBlock key={product.id} className={className}>
            <S.Product>
              <S.Favorite src={likeIcon} />
              <S.ProductImage src={product.image} alt="Product image" />
              <S.ProductTitle>{product.title}</S.ProductTitle>
              <S.ProductPrice>
                €{product.price.toString().replace(/\./g, ",")}
              </S.ProductPrice>
              <S.ButtonBlock>
                {product.quantity &&
                cart.find((item) => item.id === product.id) ? (
                  <>
                    <S.Quantity>
                      Krepšelyje <span>{product.quantity} vnt.</span>
                    </S.Quantity>
                    <QuantityButton
                      quantity={product.quantity}
                      handleIncrease={() => addToCart(product)}
                      handleDecrease={() => {
                        decreaseFromCart(product);
                      }}
                    />
                  </>
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

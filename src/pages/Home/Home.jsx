import React from "react";
import { Product, Cart } from "../../components";
import * as S from "./Home.style";
import { products } from "../../utils/productsData";

function Home() {
  return (
    <S.Container>
      <S.Wrapper>
        <Product data={products} />
      </S.Wrapper>
      <S.SideBar>
        <Cart />
      </S.SideBar>
    </S.Container>
  );
}

export default Home;

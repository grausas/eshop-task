import React from "react";
import { Product, Cart } from "../../components";
import * as S from "./Home.style";

function Home() {
  return (
    <S.Container>
      <S.Wrapper>
        <Product />
      </S.Wrapper>
      <S.SideBar>
        <Cart />
      </S.SideBar>
    </S.Container>
  );
}

export default Home;

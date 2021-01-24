import React, { useContext } from "react";
import { Product, Cart } from "../../components";
import * as S from "./Home.style";
import { CartContext } from "../../contexts/cart.context";

function Home() {
  const { isSidebarOpen } = useContext(CartContext);
  return (
    <S.Container>
      <S.Wrapper className="wrapper" isSidebarOpen={isSidebarOpen}>
        <Product />
      </S.Wrapper>

      <S.SideBar>
        <Cart />
      </S.SideBar>
    </S.Container>
  );
}

export default Home;

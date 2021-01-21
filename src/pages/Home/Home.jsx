import React from "react";
import { Product } from "../../components";
import * as S from "./Home.style";

function Home() {
  return (
    <S.Container>
      <S.Wrapper>
        <Product />
      </S.Wrapper>
    </S.Container>
  );
}

export default Home;

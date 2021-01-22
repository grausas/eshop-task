import React from "react";
import * as S from "./QuantityButton.style";
import add from "../../assets/add.png";
import minus from "../../assets/minus.png";

function QuantityButton() {
  return (
    <>
      {}
      <S.QuantityBlock>
        <S.DecreaseButton>
          <S.Icons src={minus} alt="" />
        </S.DecreaseButton>
        <S.Quantity>
          <span>1 vnt.</span>
        </S.Quantity>
        <S.IncreaseButton>
          <S.Icons src={add} alt="" />
        </S.IncreaseButton>
      </S.QuantityBlock>
    </>
  );
}

export default QuantityButton;

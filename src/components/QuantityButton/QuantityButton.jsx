import React from "react";
import * as S from "./QuantityButton.style";
import add from "../../assets/add.png";
import minus from "../../assets/minus.png";

function QuantityButton({ quantity, handleIncrease, handleDecrease }) {
  return (
    <>
      <S.QuantityBlock>
        <S.DecreaseButton onClick={handleDecrease}>
          <S.Icons src={minus} alt="minus" />
        </S.DecreaseButton>
        <S.Quantity>
          <span quantity={quantity}>{quantity} vnt.</span>
        </S.Quantity>
        <S.IncreaseButton onClick={handleIncrease}>
          <S.Icons src={add} alt="add" />
        </S.IncreaseButton>
      </S.QuantityBlock>
    </>
  );
}

export default QuantityButton;

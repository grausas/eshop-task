import styled from "styled-components";

export const QuantityBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  font-weight: 600;
`;

export const Icons = styled.img`
  width: 10px;
`;

export const Quantity = styled.div`
  width: 100%;
  height: 30px;
  line-height: 28px;
  text-align: center;
  border-top: 1px solid #d9d9d9;
  border-bottom: 1px solid #d9d9d9;
  font-size: 0.9em;
  box-sizing: border-box;
`;

export const DecreaseButton = styled.button`
  width: 65px;
  height: 30px;
  border: 1px solid #d9d9d9;
  background: #fff;
  border-radius: 20px 0 0 20px;
`;

export const IncreaseButton = styled.button`
  width: 65px;
  height: 30px;
  border: 1px solid #d9d9d9;
  background: #fff;
  border-radius: 0 20px 20px 0;
`;

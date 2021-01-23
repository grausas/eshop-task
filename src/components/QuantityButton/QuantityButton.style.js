import styled from "styled-components";

export const QuantityBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  font-weight: 600;
  height: 30px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    height: 45px;
  }
`;

export const Icons = styled.img`
  width: 10px;
`;

export const Quantity = styled.div`
  width: 100%;
  height: 100%;
  line-height: 28px;
  text-align: center;
  border-top: 1px solid #d9d9d9;
  border-bottom: 1px solid #d9d9d9;
  font-size: 0.9em;
  box-sizing: border-box;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    line-height: 43px;
  }
`;

export const DecreaseButton = styled.button`
  width: 65px;
  height: 100%;
  border: 1px solid #d9d9d9;
  background: #fff;
  border-radius: 20px 0 0 20px;
  cursor: pointer;

  &:hover {
    background: #eaeaeb;
  }
  &:focus {
    outline: none;
  }
`;

export const IncreaseButton = styled.button`
  width: 65px;
  height: 100%;
  border: 1px solid #d9d9d9;
  background: #fff;
  border-radius: 0 20px 20px 0;
  cursor: pointer;

  &:hover {
    background: #eaeaeb;
  }
  &:focus {
    outline: none;
  }
`;

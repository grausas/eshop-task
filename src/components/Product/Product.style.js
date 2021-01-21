import styled from "styled-components";

export const ProductBlock = styled.div`
  width: calc(25% - 15px);
  box-sizing: border-box;
  margin: 0px 10px 15px 10px;
  &:nth-child(4n + 1) {
    margin-left: 0;
  }
  &:nth-child(4n) {
    margin-right: 0;
  }
`;

export const Product = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 30px 10px 15px 10px;
  background: #fff;
  text-align: center;
  border: 1px solid #e6e6e6;
`;

export const ProductImage = styled.img`
  width: 100%;
  object-fit: contain;
`;

export const ProductTitle = styled.div`
  width: 100%;
  height: 70px;
  margin-top: 8px;
  line-height: 1.2;
`;

export const ProductPrice = styled.div`
  color: #e22e39;
  font-size: 1.5em;
  font-weight: 600;
  margin-bottom: 20px;
`;

export const Favorite = styled.img`
  content: "";
  width: 20px;
  position: absolute;
  top: 10px;
  right: 10px;
`;

export const ButtonBlock = styled.div`
  margin: 0 auto;
  text-align: center;
  width: 80%;
`;

import styled from "styled-components";

export const ProductBlock = styled.div`
  width: calc(25% - 15px);
  box-sizing: border-box;
  margin: 0px 10px 20px 10px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
    margin: 0;
  }

  &:nth-child(4n + 1) {
    margin-left: 0;
  }
  &:nth-child(4n) {
    margin-right: 0;
  }
`;

export const Product = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 30px 10px 15px 10px;
  background: #fff;
  text-align: center;
  border: 1px solid #e6e6e6;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    padding: 10px 10px 10px 0;
    width: 100%;
    display: inline-block;
    height: 100%;
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  object-fit: contain;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    position: relative;
    float: left;
    max-width: 120px;
    width: 100%;
  }
`;

export const ProductTitle = styled.div`
  width: 100%;
  height: 70px;
  margin-top: 8px;
  margin-bottom: 4px;
  line-height: 1.2;
  font-size: 0.95em;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    text-align: left;
    max-width: 95%;
    margin-top: 0;
    margin-bottom: 30px;
    font-size: 0.8em;
  }
`;

export const ProductPrice = styled.div`
  color: #e22e39;
  font-size: 1.6em;
  font-weight: 600;
  margin-bottom: 20px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 120px;
    text-align: center;
    position: absolute;
    bottom: 10px;
    float: left;
    font-size: 1.2em;
    margin-bottom: 0;
  }
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
  max-width: 85%;
  width: 100%;
  height: 30px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    float: right;
    max-width: 50%;
    height: 45px;
  }
`;

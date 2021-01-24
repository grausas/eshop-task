import styled from "styled-components";

export const ProductBlock = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  min-height: 100px;
  border-top: 2px solid #f2f2f3;
  box-sizing: border-box;
  background: #fff;
  padding: 10px;
`;

export const ProductImage = styled.img`
  max-width: 70px;
  object-fit: contain;
  float: left;
`;

export const InfoBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  margin-left: 10px;
`;

export const ProductTitle = styled.div`
  font-size: 0.9em;
  padding-right: 20px;
`;

export const ProductDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 30px;

  @media (max-width: ${({ theme }) => theme.laptop}) {
    div:first-child {
      display: none;
    }
  }

  div:first-child {
    display: none;
    @media (max-width: ${({ theme }) => theme.laptop}) {
      display: inherit;
    }
  }

  span:nth-child(3) {
    color: #e22e39;
    font-weight: 700;
  }

  span:nth-child(2) {
    border: 1px solid #d9d9d9;
    color: #3b3b3b;
    padding: 5px 15px;
    @media (max-width: ${({ theme }) => theme.laptop}) {
      display: none;
    }
  }
`;
export const DeleteIcon = styled.img`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 12px;
  cursor: pointer;
`;

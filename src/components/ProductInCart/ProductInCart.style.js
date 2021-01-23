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
  margin-left: 10px;
`;

export const ProductTitle = styled.div`
  margin-bottom: 4px;
  font-size: 0.9em;
  padding-right: 20px;
  margin-bottom: 8px;
`;

export const ProductDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  span:nth-child(1) {
    border: 1px solid #d9d9d9;
    padding: 5px 15px;
  }
  span:nth-child(2) {
    color: #e22e39;
    font-weight: 700;
  }
`;
export const DeleteIcon = styled.img`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 12px;
  cursor: pointer;
`;

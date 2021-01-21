import styled from "styled-components";

export const CartBlock = styled.div`
  position: fixed;
  background: #f6f6f8;
  width: 340px;
  top: 73px;
  height: 100%;
  padding: 20px 10px;
  box-sizing: border-box;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.13);
  @media (max-width: ${({ theme }) => theme.laptop}) {
    display: ${({ open }) => (open ? "block" : "none")};
  }
`;

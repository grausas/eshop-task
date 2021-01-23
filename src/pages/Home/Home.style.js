import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  max-width: 1340px;
  padding: 85px 350px 0 10px;
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;

  @media (max-width: ${({ theme }) => theme.laptop}) {
    padding: 53px 0 0 0;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    padding-top: 53px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  box-sizing: border-box;
  padding: 0 10px;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    padding: 0;
  }
`;

export const SideBar = styled.div`
  width: 340px;
  position: absolute;
  right: 0;
  top: 0;

  @media (max-width: ${({ theme }) => theme.laptop}) {
    width: 100%;
  }
`;

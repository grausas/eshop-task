import styled from "styled-components";

export const Button = styled.button`
  background: ${(props) =>
    props.color === "primary"
      ? props.theme.primary.background
      : props.theme.secondary.background};
  color: ${(props) =>
    props.color === "primary"
      ? props.theme.primary.color
      : props.theme.secondary.color};
  outline: none;
  width: 100%;
  font-size: 0.8em;
  font-weight: 600;
  border: none;
  border-radius: ${(props) => (props.color === "primary" ? "10px" : "25px")};
  padding: 0.7em 2em;
  cursor: pointer;
  &:hover {
    background: ${(props) =>
      props.color === "primary"
        ? props.theme.primary.hover.background
        : props.theme.secondary.hover.background};
  }
  &:focus {
    background: ${(props) =>
      props.color === "primary"
        ? props.theme.primary.focus.background
        : props.theme.secondary.focus.background};
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    padding: 1em 1.5em;
  }
`;

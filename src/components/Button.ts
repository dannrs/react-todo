import styled from "styled-components";

const Button = styled.button`
  padding: 0.5rem 1rem;
  border-radius: ${({ theme }) => theme.colors.radius};
  border: none;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primaryForeground};
  height: 2.5rem;

  font-size: 1rem;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

const AltButton = styled.button`
  border: none;
  background-color: transparent;
  font-weight: bold;
  cursor: pointer;
`;

export default Button;
export { AltButton };

import styled from "styled-components";

const Input = styled.input`
  padding: 0.375rem 0.5rem;
  border: 1px solid;

  width: 100%;
  height: 1.5rem;
  border-radius: ${({ theme }) => theme.colors.radius};
  border-color: ${({ theme }) => theme.colors.border};

  &:focus {
    border: 1px solid;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export default Input;

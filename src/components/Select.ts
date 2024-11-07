import styled from "styled-components";

const Select = styled.select`
  margin: 1rem 0;
  padding: 0.5rem;
  font-size: 1rem;

  border-radius: ${({ theme }) => theme.colors.radius};
  border-color: ${({ theme }) => theme.colors.border};
`;

export default Select;

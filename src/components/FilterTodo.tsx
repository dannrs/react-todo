import styled from "styled-components";
import Input from "./Input";

interface Props {
  inputValue: string;
  filterValue: string;
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFilterChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Container = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  width: 70%;
`;

const FilterSelect = styled.select`
  margin: 1rem 0;
  padding: 0.5rem;
  font-size: 1rem;

  border-radius: ${({ theme }) => theme.colors.radius};
  border-color: ${({ theme }) => theme.colors.border};
`;

export default function FilterTodo({
  inputValue,
  filterValue,
  onInputChange,
  onFilterChange,
}: Props) {
  return (
    <Container>
      <Input
        type="text"
        value={inputValue}
        onChange={onInputChange}
        placeholder="Search task..."
      />
      <FilterSelect value={filterValue} onChange={onFilterChange}>
        <option value="all">All</option>
        <option value="active">Active</option>
        <option value="completed">Completed</option>
      </FilterSelect>
    </Container>
  );
}

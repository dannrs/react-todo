import styled from "styled-components";

const TodoList = styled.ul`
  list-style: none;
  padding: 0;
  width: 70%;
  overflow-y: auto;
  flex: 1;
  margin: 1rem 0;
`;

const TodoItem = styled.li<{ $completed: boolean; $isDragging?: boolean }>`
  display: flex;
  gap: 0.375rem;
  align-items: center;
  justify-content: space-between;
  border: 1px solid;
  border-color: ${({ theme, $isDragging }) =>
    $isDragging ? theme.colors.primary : theme.colors.border};
  padding: 0.5rem 1rem;
  margin-bottom: 0.5rem;
  border-radius: 0.5rem;
  min-height: 1.5rem;
  height: auto;
  cursor: move;
  background-color: ${({ theme, $isDragging }) =>
    $isDragging ? theme.colors.secondary : theme.colors.background};

  span {
    text-decoration: ${({ $completed }) =>
      $completed ? "line-through" : "none"};
    word-break: break-word;
    white-space: pre-wrap;
  }

  form {
    display: inline-flex;
    justify-content: space-between;
    gap: 0.5rem;
    width: 100%;
    min-height: 1.5rem;
  }

  form input {
    display: flex;
    flex-grow: 1;
  }

  > span {
    display: flex;
    align-items: center;
    gap: 1rem;
    flex: 1;
  }

  > span:last-child {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    flex: 0;
  }
`;

export { TodoItem, TodoList };

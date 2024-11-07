import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import useGetTodo from "../hooks/useGetTodo";
import Container from "../components/Container";
import { AltButton } from "../components/Button";
import { ArrowLeft } from "lucide-react";
import { useDispatch } from "react-redux";
import { toggleTodo } from "../reducers/todo";

const TodoDetail = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 70%;
  height: 100%;

  a button {
    display: flex;
    gap: 0.5rem;
    text-decoration: none;
  }
`;

const TodoTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 500;
  margin: 0;
  max-height: 100dvh;
  overflow-y: auto;
  padding: 0.5rem;
`;

const TodoStatus = styled.span<{ $completed: boolean }>`
  padding: 0.5rem 1rem;
  border-radius: ${({ theme }) => theme.colors.radius};
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primaryForeground};
  width: fit-content;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

export default function TodoDetailPage() {
  const { todoId } = useParams();
  const todo = useGetTodo(todoId || "");
  const dispatch = useDispatch();

  if (!todo) {
    return (
      <Container>
        <div>
          <p>Todo not found</p>
          <Link to="/">Back to Home</Link>
        </div>
      </Container>
    );
  }

  const handleToggle = () => {
    dispatch(toggleTodo(todo.id));
  };

  return (
    <Container>
      <div>
        <TodoDetail>
          <Link to="/">
            <AltButton>
              <ArrowLeft style={{ height: "1rem", width: "1rem" }} />
              Back to home
            </AltButton>
          </Link>
          <TodoTitle>{todo.title}</TodoTitle>
          <TodoStatus $completed={todo.completed} onClick={handleToggle}>
            {todo.completed ? "Completed" : "Active"}
          </TodoStatus>
        </TodoDetail>
      </div>
    </Container>
  );
}

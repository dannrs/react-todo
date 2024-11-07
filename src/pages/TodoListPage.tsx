import { useEffect } from "react";
import { TodoItem, TodoList } from "../components/Todo";
import useTodos from "../hooks/useTodos";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { AltButton } from "../components/Button";
import { ArrowLeft } from "lucide-react";
import useDragAndDrop from "../hooks/useDragAndDrop";

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 2rem;
  box-sizing: border-box;
  font-family: Inter, sans-serif;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70%;
  max-width: 42rem; /* Optional: add a max-width to match your app's style */

  ul {
    list-style: none;
    padding: 0;
    width: 70%;
    overflow-y: auto;
    flex: 1;
    margin: 1rem 0;
  }

  ul a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary};
  }

  a button {
    display: flex;
    gap: 0.5rem;
    text-decoration: none;
  }
`;

export default function TodoListPage() {
  const { data } = useTodos();
  const { handleDragStart, handleDragEnd, handleDragOver, handleDrop } =
    useDragAndDrop();

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(data.todos));
  }, [data.todos]);

  return (
    <PageContainer>
      <ContentContainer>
        <Link to="/">
          <AltButton>
            <ArrowLeft style={{ height: "1rem", width: "1rem" }} />
            Back to home
          </AltButton>
        </Link>
        <h1>List of todos</h1>
        <TodoList>
          {data.todos.map((todo) => (
            <TodoItem
              key={todo.id}
              $completed={todo.completed}
              draggable
              onDragStart={(e) => handleDragStart(e, todo.id)}
              onDragEnd={handleDragEnd}
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(e, todo.id)}
            >
              <Link to={`/todos/${todo.id}`}>{todo.title}</Link>
            </TodoItem>
          ))}
        </TodoList>
      </ContentContainer>
    </PageContainer>
  );
}

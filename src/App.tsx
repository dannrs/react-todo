import Container from "./components/Container";
import TodoForm from "./components/TodoForm";
import { useEffect } from "react";
import { TodoItem, TodoList } from "./components/Todo";
import FilterTodo from "./components/FilterTodo";
import { FilterStatus } from "./lib/types";
import { AltButton } from "./components/Button";
import { Edit2, Save, Trash2, X } from "lucide-react";
import useTodos from "./hooks/useTodos";
import { Link } from "react-router-dom";
import useDragAndDrop from "./hooks/useDragAndDrop";

function App() {
  const { data, filters, actions, setters } = useTodos();
  const { handleDragStart, handleDragEnd, handleDragOver, handleDrop } =
    useDragAndDrop();

  useEffect(() => {
    try {
      localStorage.setItem("todos", JSON.stringify(data.todos));
    } catch (err) {
      console.error("Failed to save todos to localStorage:", err);
    }
  }, [data.todos]);

  return (
    <Container>
      <div>
        <header>
          <h1>Todo App</h1>
        </header>
        <TodoForm
          value={data.newTask}
          onSubmit={actions.addTodo}
          onChange={(e) => setters.setNewTask(e.target.value)}
        />
        <FilterTodo
          inputValue={filters.searchQuery}
          filterValue={filters.filterStatus}
          onInputChange={(e) => setters.setSearchQuery(e.target.value)}
          onFilterChange={(e) =>
            setters.setFilterStatus(e.target.value as FilterStatus)
          }
        />
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
              {data.editingId === todo.id ? (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    actions.editTitle(todo.id);
                  }}
                >
                  <input
                    type="text"
                    value={data.editText}
                    onChange={(e) => setters.setEditText(e.target.value)}
                  />
                  <span>
                    <AltButton type="submit">
                      <Save style={{ height: "1rem", width: "1rem" }} />
                    </AltButton>
                    <AltButton onClick={() => setters.setEditingId(null)}>
                      <X style={{ height: "1rem", width: "1rem" }} />
                    </AltButton>
                  </span>
                </form>
              ) : (
                <>
                  <span>
                    <input
                      type="checkbox"
                      checked={todo.completed}
                      onChange={() => actions.toggleTask(todo.id)}
                      style={{ marginRight: "1rem" }}
                    />
                    <Link
                      to={`/todos/${todo.id}`}
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <span>{todo.title}</span>
                    </Link>
                  </span>
                  <span>
                    <AltButton
                      onClick={() => actions.startEditing(todo.id, todo.title)}
                    >
                      <Edit2 style={{ height: "1rem", width: "1rem" }} />
                    </AltButton>
                    <AltButton onClick={() => actions.deleteTask(todo.id)}>
                      <Trash2 style={{ height: "1rem", width: "1rem" }} />
                    </AltButton>
                  </span>
                </>
              )}
            </TodoItem>
          ))}
        </TodoList>
      </div>
    </Container>
  );
}

export default App;

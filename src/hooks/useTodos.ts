import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createTodo, deleteTodo, editTodo, toggleTodo } from "../reducers/todo";
import { RootState } from "../store";
import { FilterStatus } from "../lib/types";

const useTodos = () => {
  const todos = useSelector((state: RootState) => state.todos);
  const dispatch = useDispatch();

  const [newTask, setNewTask] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editText, setEditText] = useState("");
  const [filterStatus, setFilterStatus] = useState<FilterStatus>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const addTodo = (event: React.FormEvent) => {
    event.preventDefault();
    try {
      if (!newTask.trim()) {
        console.error("Task cannot be empty");
        return;
      }

      const maxOrder = todos.reduce(
        (max, todo) => Math.max(max, todo.order || 0),
        0
      );

      dispatch(
        createTodo({
          id: (todos.length + 1).toString(),
          title: newTask,
          completed: false,
          order: maxOrder + 1,
        })
      );
      setNewTask("");
    } catch (error) {
      console.error("Failed to create todo", error);
    }
  };

  const editTitle = (id: string) => {
    try {
      if (!editText.trim()) {
        console.error("Task title cannot be empty");
      }
      dispatch(editTodo({ id, title: editText }));
      setEditingId(null);
      setEditText("");
    } catch (err) {
      console.error("Failed to edit todo", err);
    }
  };

  const toggleTask = (id: string) => {
    try {
      dispatch(toggleTodo(id));
    } catch (err) {
      console.error("Failed to toggle todo:", err);
    }
  };

  const deleteTask = (id: string) => {
    try {
      dispatch(deleteTodo(id));
    } catch (err) {
      console.error("Failed to delete todo:", err);
    }
  };

  const startEditing = (id: string, currentText: string) => {
    try {
      setEditingId(id);
      setEditText(currentText);
    } catch (err) {
      console.error("Failed to start editing:", err);
    }
  };

  const filteredTodos = useMemo(
    () =>
      todos
        .filter((todo) => {
          if (filterStatus === "active") return !todo.completed;
          if (filterStatus === "completed") return todo.completed;
          return true;
        })
        .filter((todo) =>
          todo.title.toLowerCase().includes(searchQuery.toLowerCase())
        ),
    [todos, filterStatus, searchQuery]
  );

  return {
    data: {
      todos: filteredTodos,
      newTask,
      editingId,
      editText,
    },
    filters: {
      filterStatus,
      searchQuery,
    },
    actions: {
      addTodo,
      editTitle,
      toggleTask,
      deleteTask,
      startEditing,
    },
    setters: {
      setNewTask,
      setEditText,
      setFilterStatus,
      setSearchQuery,
      setEditingId,
    },
  };
};

export default useTodos;

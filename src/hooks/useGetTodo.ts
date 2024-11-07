import { useSelector } from "react-redux";
import { RootState } from "../store";

const useGetTodo = (id: string) => {
  const todo = useSelector((state: RootState) =>
    state.todos.find((todo) => todo.id === id)
  );

  return todo;
};

export default useGetTodo;

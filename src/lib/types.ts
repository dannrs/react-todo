export interface Todo {
  id: string;
  title: string;
  completed: boolean;
  order: number;
}

export interface EditTodoPayload {
  id: string;
  title: string;
}

export type FilterStatus = "all" | "active" | "completed";

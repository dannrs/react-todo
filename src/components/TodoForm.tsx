import React from "react";
import Button from "./Button";
import Form from "./Form";
import Input from "./Input";

interface Props {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

export default function TodoForm({ value, onSubmit, onChange }: Props) {
  return (
    <Form onSubmit={onSubmit}>
      <Input
        type="text"
        placeholder="Add a new task"
        value={value}
        onChange={onChange}
      />
      <Button type="submit">+</Button>
    </Form>
  );
}

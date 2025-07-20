import React, { useState } from "react";

type NewTodoProps = {
  onAddTodo: (title: string, description: string) => void;
};

function NewTodo({ onAddTodo }: NewTodoProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddTodo(title, description);
    setTitle("");
    setDescription("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 border rounded bg-light shadow-sm"
    >
      <div className="mb-3">
        <label htmlFor="todo-title" className="form-label">
          Todo
        </label>
        <input
          id="todo-title"
          type="text"
          className="form-control"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter title"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="todo-description" className="form-label">
          Description
        </label>
        <textarea
          id="todo-description"
          name="description"
          className="form-control"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter description"
          rows={3}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Add
      </button>
    </form>
  );
}

export default NewTodo;

import { useState } from "react";
import "./css/App.css";
import TodoCollection from "./components/TodoCollection";
import NewTodo from "./components/NewTodo";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Create the Todo Card",
      description:
        "Create a todo card component that shows the todo, its status and description.  Also allows changing of the state",
      status: "new",
    },
    {
      id: 2,
      title: "Start a todo",
      description: "Add functionality to start working on the todo",
      status: "new",
    },
    {
      id: 3,
      title: "Create the project",
      description: "Use vite to create a new react project.",
      status: "new",
    },
    {
      id: 4,
      title: "Add a new Todo",
      description: "Add a form to add a new Todo",
      status: "new",
    },
    {
      id: 5,
      title: "Filter Todos",
      description: "Add filter controls to limit what is shown on screen.",
      status: "new",
    },
    {
      id: 6,
      title: "Investigate local storage",
      description: "Local storage for persistence when browser is closed.",
      status: "new",
    },
    {
      id: 7,
      title: "Investigate calling an API endpoint",
      description: "Store Todos in a database accessed through an API of some sort. Probably aspnet.",
      status: "new",
    }
  ]);

  const onStatusChanged = (newStatus: string, id: number) => {
    console.log(`Id: ${id} Status: ${newStatus}`);
    setTodos((current) =>
      current.map((todo) =>
        todo.id === id ? { ...todo, status: newStatus } : todo
      )
    );
  };

  const onDeleted = (id: number) => {
    setTodos((current) => current.filter((todo) => todo.id !== id));
  };

const addNewTodo = (title: string, description: string) =>
{
  setTodos((current) => [
    ...current,
    {
      id: current.length > 0 ? Math.max(...current.map(todo => todo.id)) + 1 : 1,
      title,
      description,
      status: "new",
    },
  ]);
};

  return (
    <>
      <NewTodo onAddTodo={(title: string, description: string) => addNewTodo(title, description)}/>

      <TodoCollection
        status="new"
        title="Todo"
        onDeleted={onDeleted}
        onStatusChanged={onStatusChanged}
        todos={todos}
      ></TodoCollection>
            <TodoCollection
        status="doing"
        title="In Progress"
        onDeleted={onDeleted}
        onStatusChanged={onStatusChanged}
        todos={todos}
      ></TodoCollection>
            <TodoCollection
        status="done"
        title="Completed"
        onDeleted={onDeleted}
        onStatusChanged={onStatusChanged}
        todos={todos}
      ></TodoCollection>
      {/* <div className="todo-list">
        {todos.filter((item) => item.status == "new").map((item) => (
          <TodoCard
            id={item.id}
            onStatusChanged={onStatusChanged}
            onDeleted={onDeleted}
            title={item.title}
            description={item.description}
            status={item.status}
          ></TodoCard>
        ))}{" "}
      </div> */}
    </>
  );
}

export default App;

import TodoCard from "./TodoCard";

interface Props {
  status: string;
  title: string;
  todos: any[];
  onStatusChanged: (newStatus: string, id: number) => void;
  onDeleted: (id: number) => void;
}

function TodoCollection({ status, title, todos, onStatusChanged, onDeleted }: Props) {
  return (
    <>
      {todos.filter((item) => item.status == status).length > 0 && (
        <>
          <h2>{title}</h2>
          <div className="todo-list">
            {todos
              .filter((item) => item.status == status)
              .map((item) => (
                <TodoCard
                  id={item.id}
                  onStatusChanged={onStatusChanged}
                  onDeleted={onDeleted}
                  title={item.title}
                  description={item.description}
                  status={item.status}
                />
              ))}
          </div>
        </>
      )}
    </>
  );
}

export default TodoCollection;

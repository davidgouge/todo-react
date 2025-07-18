import "../css/TodoCard.css";

interface Props {
  id: number;
  title: string;
  description: string;
  status: string;
  onStatusChanged: (newStatus: string, id: number) => void;
  onDeleted: (id: number) => void;
}

function TodoCard({ id, title, description, status, onStatusChanged, onDeleted }: Props) {

  const getStatusClass = (status: string) =>{
    switch (status) {
      case "new":
        return "bg-primary";
      case "doing":
        return "bg-info";
      case "done":
        return "bg-success";
      default:
        return "";
    }
  };

  return (
    <div className="card todo-card">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{status}</h6>
        <p className="card-text">{description}</p>
      </div>
      <div className={`card-footer ${getStatusClass(status)}`}>
        {status === "new" && (
          <a
            href="#"
            className="card-link btn btn-info"
            onClick={(e) => {
              e.preventDefault();
              onStatusChanged("doing", id);
            }}
          >
            <i className="bi bi-play-fill"></i>
          </a>
        )}
        {status === "doing" && (
          <a
            href="#"
            className="card-link btn btn-success"
            onClick={(e) => {
              e.preventDefault();
              onStatusChanged("done", id);
            }}
          >
            <i className="bi bi-check-lg"></i>
          </a>
        )}
        <a
            href="#"
            className="card-link btn btn-danger"
            onClick={(e) => {
              e.preventDefault();
              onDeleted(id);
            }}
          >
            <i className="bi bi-trash3"></i>
          </a>
      </div>
    </div>
  );
}

export default TodoCard;

{
  /* <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div> */
}

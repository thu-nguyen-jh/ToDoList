import { ToDoItemType } from "../config/interface";
import statusEnum from "../config/statusData";

function ToDoItem({
  task,
  deleteTask,
  toggleCompleted,
}: {
  task: ToDoItemType;
  deleteTask: (id: number) => void;
  toggleCompleted: (id: number) => void;
}) {
  const { id, status_id, title } = task;
  return (
    <div className="todo-item">
      <input
        id={id.toString()}
        type="checkbox"
        checked={status_id ? true : false}
        onChange={() => toggleCompleted(id)}
      />
      <p>{title}</p>
      <div>{statusEnum[status_id]}</div>
      <button onClick={() => deleteTask(id)}>X</button>
    </div>
  );
}
export default ToDoItem;

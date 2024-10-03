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
  const { id, statusId, title } = task;
  return (
    <div className="todo-item">
      <input
        id={id.toString()}
        type="checkbox"
        checked={statusId ? true : false}
        onChange={() => toggleCompleted(id)}
      />
      <p>{title}</p>
      <div>{statusEnum[statusId]}</div>
      <button onClick={() => deleteTask(id)}>X</button>
    </div>
  );
}
export default ToDoItem;

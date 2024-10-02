import { statusData } from "../data";

//@ts-ignore
function TodoItem({ task, deleteTask, toggleCompleted }) {
  function handleChange() {
    toggleCompleted(task.id);
  }
  return (
    <div className="todo-item">
      <input
        id={task.id}
        type="checkbox"
        checked={task.status_id ? true : false}
        onChange={handleChange}
      />
      <p>{task.title}</p>
      <div>
        {
          statusData.filter((item) => item.status_id === task.status_id)[0]
            .status_name
        }
      </div>
      <button onClick={() => deleteTask(task.id)}>X</button>
    </div>
  );
}
export default TodoItem;

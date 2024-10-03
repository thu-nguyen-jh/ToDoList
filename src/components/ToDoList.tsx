import { FormEvent, Fragment, useState } from "react";
import TodoItem from "./ToDoItem";
import { statusData, toDoData } from "../data";

type ToDoItem = {
  id: number;
  title: string;
  status_id: number;
};

const ButtonAddToDoList = ({ onAdd }: {onAdd: (task: string) => void}) => {
  const [text, setText] = useState<string>("");
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    const formData = new FormData(event.currentTarget);
    onAdd(formData.get('add') as string);
    event.currentTarget.reset();
  }
  return (
    <form className="todo_add" onSubmit={handleSubmit}>
      <input
        value={text}
        name='add'
        id="add"
        onChange={(e) => setText(e.target.value)}
      />
      <button
        type='submit'
      >
        Add
      </button>
    </form>
  );
};

const ToDoList = () => {
  const [toDoList, setToDoList] = useState<ToDoItem[]>(toDoData);
  const [filterStatus, setFilterStatus] = useState(-1);



  const ToDoFilter = ({ status_id }: { status_id: number }) => {
    if (status_id === -1) {
      return (
        <button
          onClick={() => {
            setFilterStatus(status_id);
          }}
        >
          All
        </button>
      );
    }

    const statusName = statusData.filter(
      (item) => item.status_id === status_id
    )[0].status_name;
    return (
      <button
        onClick={() => {
          setFilterStatus(status_id);
        }}
      >
        {statusName}
      </button>
    );
  };
  function addTask(text: string) {
    const newTask = {
      id: Date.now(),
      title: text,
      status_id: 0,
    };
    console.log("set", newTask);
    setToDoList([...toDoList, newTask]);
    // setText("");
  }
  function deleteTask(id: number) {
    setToDoList(toDoList.filter((task) => task.id !== id));
    console.log("delete", id);
  }
  function toggleCompleted(id: number) {
    setToDoList((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, status_id: item.status_id ? 0 : 1 } : item
      )
    );
  }

  const toDoListForRender = filterStatus < 0 ? toDoList : toDoList.filter(...);
  return (
    <>
      <div className="todo-filter">
        <ToDoFilter status_id={-1} />
        {statusData.map((item) => {
          return (
            <ToDoFilter key={item.status_id} status_id={item.status_id} />
          );
        })}
      </div>
      <div className="todo-list">
        {toDoListForRender.map((task) => (
          <TodoItem
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            toggleCompleted={toggleCompleted}
          />
        ))}
      </div>
      <ButtonAddToDoList onAdd={addTask}/>
    </>
  );
};

export default ToDoList;

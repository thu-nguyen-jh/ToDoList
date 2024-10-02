import { Fragment, useState } from "react";
import TodoItem from "./ToDoItem";
import { statusData, toDoData } from "../data";

type ToDoItem = {
  id: number;
  title: string;
  status_id: number;
};

const ToDoList = () => {
  const [toDoList, setToDoList] = useState<ToDoItem[]>(toDoData);
  const [filterStatus, setFilterStatus] = useState(-1);

  const ButtonAddToDoList = () => {
    const [text, setText] = useState<string>("");
    return (
      <div className="todo_add">
        <input
          value={text}
          id="add"
          onChange={(e) => setText(e.target.value)}
        />
        <button
          onClick={() => {
            addTask(text);
          }}
        >
          Add
        </button>
      </div>
    );
  };

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
  return (
    <>
      <div className="todo-filter">
        <ToDoFilter status_id={-1} />
        {statusData.map((item) => {
          return (
            <Fragment key={item.status_id}>
              <ToDoFilter status_id={item.status_id} />
            </Fragment>
          );
        })}
      </div>
      <div className="todo-list">
        {filterStatus < 0
          ? toDoList.map((task) => (
              <TodoItem
                key={task.id}
                task={task}
                deleteTask={deleteTask}
                toggleCompleted={toggleCompleted}
              />
            ))
          : toDoList
              .filter((item) => item.status_id === filterStatus)
              .map((task) => (
                <TodoItem
                  key={task.id}
                  task={task}
                  deleteTask={deleteTask}
                  toggleCompleted={toggleCompleted}
                />
              ))}
      </div>
      <ButtonAddToDoList />
    </>
  );
};

export default ToDoList;

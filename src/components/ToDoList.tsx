import { useState } from "react";
import TodoItem from "./ToDoItem";
import { statusData, toDoData } from "../config";
import ButtonAddToDoList from "./ButtonAddToDoList";
import ToDoFilter from "./ToDoFilter";
import { ToDoItemType } from "../config/interface";

const ToDoList = () => {
  const [toDoList, setToDoList] = useState<ToDoItemType[]>(toDoData);
  const [filterStatus, setFilterStatus] = useState(-1);

  function addTask(text: string) {
    const newTask = {
      id: Date.now(),
      title: text,
      statusId: 0,
    };
    setToDoList([...toDoList, newTask]);
  }
  function deleteTask(id: number) {
    setToDoList(toDoList.filter((task) => task.id !== id));
  }
  function toggleCompleted(id: number) {
    setToDoList((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, statusId: item.statusId ? 0 : 1 } : item
      )
    );
  }
  const toDoDataForRender =
    filterStatus < 0
      ? toDoList
      : toDoList.filter((item) => item.statusId === filterStatus);

  const filterDataForRender = [
    { statusId: -1, statusName: "All" },
    ...statusData,
  ];
  console.log({ filterDataForRender });
  return (
    <>
      <div className="todo-filter">
        {filterDataForRender.map((item, index) => {
          return (
            <ToDoFilter
              key={index}
              statusId={item.statusId}
              setFilterStatus={setFilterStatus}
            />
          );
        })}
      </div>
      <div className="todo-list">
        {toDoDataForRender.map((task) => (
          <TodoItem
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            toggleCompleted={toggleCompleted}
          />
        ))}
      </div>
      <ButtonAddToDoList onAdd={addTask} />
    </>
  );
};

export default ToDoList;

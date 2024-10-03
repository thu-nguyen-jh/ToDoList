import { useState } from "react";

const ButtonAddToDoList = ({ onAdd }: { onAdd: (task: string) => void }) => {
  const [text, setText] = useState<string>("");
  return (
    <div className="todo_add">
      <input value={text} id="add" onChange={(e) => setText(e.target.value)} />
      <button
        onClick={() => {
          onAdd(text);
        }}
      >
        Add
      </button>
    </div>
  );
};
export default ButtonAddToDoList;

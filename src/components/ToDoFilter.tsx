import React from "react";
import statusEnum from "../config/statusData";

const ToDoFilter = ({
  status_id,
  setFilterStatus,
}: {
  status_id: number;
  setFilterStatus: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const statusName = statusEnum[status_id];
  return (
    <button
      onClick={() => {
        setFilterStatus(status_id);
      }}
    >
      {status_id < 0 ? "All" : statusName}
    </button>
  );
};
export default ToDoFilter;

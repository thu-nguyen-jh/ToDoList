import React from "react";
import statusEnum from "../config/statusData";

const ToDoFilter = ({
  statusId,
  setFilterStatus,
}: {
  statusId: number;
  setFilterStatus: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const statusName = statusEnum[statusId];
  return (
    <button
      onClick={() => {
        setFilterStatus(statusId);
      }}
    >
      {statusId < 0 ? "All" : statusName}
    </button>
  );
};
export default ToDoFilter;

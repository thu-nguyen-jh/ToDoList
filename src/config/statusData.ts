import { Status } from "./interface";

export const statusData = [
  {
    statusId: 1,
    statusName: "Done",
  },
  {
    statusId: 0,
    statusName: "Pending",
  },
];

const statusEnum : Status = {
  1: "Done",
  0: "Pending",
};
export default statusEnum
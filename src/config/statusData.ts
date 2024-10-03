import { Status } from "./interface";

export const statusData = [
  {
    status_id: 1,
    status_name: "Done",
  },
  {
    status_id: 0,
    status_name: "Pending",
  },
];

const statusEnum : Status = {
  1: "Done",
  0: "Pending",
};
export default statusEnum
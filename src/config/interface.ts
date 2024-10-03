export interface ToDoItemType {
  id: number,
  title: string,
  statusId: number
};
export interface Status {
  [key: number]: string;
}
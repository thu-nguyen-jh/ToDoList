export interface ToDoItemType {
  id: number,
  title: string,
  status_id: number
};
export interface Status {
  [key: number]: string;
}
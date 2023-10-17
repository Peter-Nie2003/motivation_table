import React, { useEffect, useState } from "react";
import { get } from "../../utilities";
import taskSchema from "../../../../shared/Tasks";
import TaskCard from "./TaskCard";
import SubmitButton from "./SubmitButton";

interface ListBlockProps {
  id: number,
}
function ListBlock(props: ListBlockProps) {

  const [List, setList] = useState([]);

  useEffect(() => {
    get("/api/task", { id: props.id }).then((tasks) => {
      setList(tasks);
    })
  });

  let todoList: React.ReactNode | null = null;
  const havetask: boolean = List.length !== 0;

  if (havetask) {
    todoList = List.map((task: taskSchema) => (
      <TaskCard
        name={task.name}
        confident={task.confident}
        due_dy={task.due_dy}
        interest={task.interest}
        done={task.done}
        value={task.value}
      />
    ));
  } else {
    todoList = <div>There is no task in this type</div>

  }
  return (
    <div>
      <SubmitButton />
      {todoList}
    </div>

  )


}
export default ListBlock
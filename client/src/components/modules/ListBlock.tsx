import React, { useEffect, useState } from "react";
import { get } from "../../utilities";
import taskSchema from "../../../../shared/Tasks";
import TaskCard from "./TaskCard";
import SubmitTasks from "./SubmitTasks";
import "../../utilities.css"

interface ListBlockProps {
  name: string,
}
function ListBlock(props: ListBlockProps) {

  const [List, setList] = useState([]);

  useEffect(() => {
    get("/api/task", { name: props.name }).then((list) => {
      setList(list);
    })
  });

  let todoList: React.ReactNode | null = null;
  const havetask: boolean = List.length !== 0;
  if (havetask) {
    todoList = List.map((task: taskSchema) => (
      <TaskCard
        key={task.name}
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
    <div className="component">
      {props.name}
      <SubmitTasks
        id={props.name}
      />
      {todoList}
    </div>

  )


}
export default ListBlock;
import React, { useEffect, useState } from "react";
import { get } from "../../utilities";
import taskSchema from "../../../../shared/Tasks"
import TaskCard from "./TaskCard";
import SubmitButton from "./SubmitButton";


export default function Schedule() {
    const [tasksObject, tasksObjectSetter] = useState([]);
    useEffect(() => {
        get("/api/tasks").then((tasks) => {
            tasksObjectSetter(tasks);
        })
    });
    let tasksLists: React.ReactNode | null = null;
    const haveTasks: boolean = tasksObject.length !== 0;
    if (haveTasks) {
        tasksLists = tasksObject.map((task: taskSchema) => (
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
        tasksLists = <div>no tasks here</div>;
    }
    return (
        <div>
            <SubmitButton />
            {tasksLists}
        </div>
    );
};
import React from "react";

interface TaskCardProps {
    name: string,
    confident: number,
    interest: number,
    due_dy: string,
    done: boolean,
    value: number,
}

export default function TaskCard(props: TaskCardProps) {
    return (
        <div>
            {props.name}
            {props.confident}
            {props.interest}
            {props.due_dy} {/* Use the 'date' variable, which contains the formatted date */}
        </div>
    );
}

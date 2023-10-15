import React from "react";

interface TaskCardProps {
    name: string,
    confident: number,
    interest: number,
    due_dy: string,
}

export default function TaskCard(props: TaskCardProps) {
    return (
        <div>
            <li>
                {props.name}
                {props.confident}
                {props.interest}
                {props.due_dy} {/* Use the 'date' variable, which contains the formatted date */}
            </li>
        </div>
    );
}

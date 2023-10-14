import React from "react";

interface TaskCardProps {
    name: string,
    difficulty: number,
    interest: number,
    due_dy: string,
}

export default function TaskCard(props: TaskCardProps) {
    return (
        <div>
            <li>
                {props.name}
                {props.difficulty}
                {props.interest}
                {props.due_dy} {/* Use the 'date' variable, which contains the formatted date */}
            </li>
        </div>
    );
}

import { Schema, Document, model } from "mongoose";

//define a schema for the tasks
const taskSchema = new Schema({
    name: String,
    confident: Number,
    interest: Number,
    due_dy: String,
    value: Number,
    done: Boolean,
    workSpace: String,
    time: Number,
});

export interface taskSchema extends Document {
    name: string,
    confident: number,
    interest: number,
    due_dy: string,
    value: number,
    done: boolean,
    workSpace: string,
    _id: string,
    time: number,
};

const tasksObject = model<taskSchema>("tasks", taskSchema);

export default tasksObject;
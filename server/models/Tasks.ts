import { Schema,Document,model} from "mongoose";

//define a schema for the tasks
const taskSchema = new Schema( {
    name:String,
    difficulty:Number,
    interest:Number,
    due_dy:String,
});

export interface taskSchema extends Document{
    name:string,
    difficulty:number,
    interest:number,
    due_dy:string,
    _id:string,
};

const tasksObject = model<taskSchema>("tasks", taskSchema);

export default tasksObject;
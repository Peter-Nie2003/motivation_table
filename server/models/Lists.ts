import { Schema, Document, model } from "mongoose";


const listSchema = new Schema({
    name: String,
})

export interface listSchema extends Document {
    name: string,
    _id: string,
}

const listObject = model<listSchema>("lists", listSchema);

export default listObject;
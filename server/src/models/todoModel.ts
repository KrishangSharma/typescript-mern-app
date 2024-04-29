import { ITodo } from "../interfaces/todoInterface";
import { model, Schema } from "mongoose";

const todoSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    isCompleted: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default model<ITodo>("Todo", todoSchema);

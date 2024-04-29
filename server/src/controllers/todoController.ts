import Todo from "../models/todoModel";
import { Request, Response } from "express";
import { ITodo } from "../interfaces/todoInterface";

// Get All Todos
const getTodos = async (req: Request, res: Response) => {
  try {
    const todos: ITodo[] = await Todo.find();
    res.status(200).json({ message: "Todos retrieved successfully!", todos });
  } catch (err) {
    console.log(err);
  }
};

// Create a Todo
const addTodo = async (req: Request, res: Response) => {
  try {
    const { title } = req.body;

    // Construct a todo with the recieved data
    const newTodo = new Todo({ title });

    // Save the new todo
    const savedTodo: ITodo = await newTodo.save();

    res
      .status(201)
      .json({ message: "Todo created successfully!", todo: savedTodo });
  } catch (err) {
    console.log(err);
  }
};

// Mark as completed
const markAsComplete = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    // Find the Todo
    const todo: ITodo | null = await Todo.findByIdAndUpdate(
      id,
      { isCompleted: true },
      { new: true }
    );

    if (todo) {
      res.status(200).json({ message: "Todo completed!" });
    } else if (!todo) {
      res.status(404).json({ message: "Todo not found!" });
    } else {
      res
        .status(500)
        .json({ message: "Server error! Please try again later!" });
    }
  } catch (err) {
    console.log(err);
  }
};

// Delete a todo
const deleteTodo = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const deletedTodo: ITodo | null = await Todo.findByIdAndDelete(id, {
      new: true,
    });
    const allTodos: ITodo[] = await Todo.find();

    if (deletedTodo) {
      res
        .status(200)
        .json({ message: "Todo deleted!", remainingTodos: allTodos });
    } else if (!deletedTodo) {
      res.status(404).json({ message: "Todo not found!" });
    } else {
      res
        .status(500)
        .json({ message: "Server error! Please try again later!" });
    }
  } catch (err) {
    console.log(err);
  }
};

export { getTodos, addTodo, markAsComplete, deleteTodo };

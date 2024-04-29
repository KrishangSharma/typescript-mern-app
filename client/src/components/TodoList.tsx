import axios from "axios";
import Todo from "./Todo";
import { useState, useEffect } from "react";

interface Todo {
  title: string;
  isCompleted: boolean;
}

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  // Fetch all todos on component mount
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/all");
        // Show status and populate todos
        setTodos(res.data.todos);
      } catch (err) {
        console.log(err);
      }
    };
    fetchTodos();
  }, []);
  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-2xl">
        {todos?.length > 0 ? "Your Todos" : "Nothing to show here :("}
      </h2>
      {/* Dynamically added todoosss */}
      <div className="flex flex-col gap-2">
        {todos.map((todo, index) => (
          <Todo key={index} info={todo} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;

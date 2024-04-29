import axios from "axios";
import { toast } from "react-toastify";

interface Todo {
  _id: string;
  title: string;
  isCompleted: boolean;
}

const Todo = ({ info }: { info: Todo }) => {
  // Mark as Completed
  const markCompleted = async (id: string) => {
    try {
      const res = await axios.post(`http://localhost:5000/api/complete/${id}`);
      toast.success(res.data.message);
      location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  // Delete Todo
  const deleteTodo = async (id: string) => {
    try {
      const res = await axios.delete(`http://localhost:5000/api/delete/${id}`);
      toast.success(res.data.message);
      location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="border flex w-full p-4 items-center justify-between">
      <span
        className={`text-xl ${
          info.isCompleted === true ? " line-through" : ""
        } `}
      >
        {info.title}
      </span>
      <div className="flex gap-4 items-center">
        <button
          className="px-10 py-2 bg-gray-950 border border-green-700 rounded-sm cursor-pointer hover:bg-green-800 transition"
          onClick={() => markCompleted(info._id)}
        >
          Completed
        </button>
        <button
          className="px-10 py-2 bg-gray-950 border border-red-600 rounded-sm cursor-pointer hover:bg-red-800 transition"
          onClick={() => deleteTodo(info._id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Todo;

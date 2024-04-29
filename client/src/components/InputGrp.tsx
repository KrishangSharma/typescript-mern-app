import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

// Interface for a Todo for type checking
interface Todo {
  title: string;
  message?: string;
}

const InputGrp = () => {
  const [title, setTitle] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    // Prevent default form submission behaviour
    e.preventDefault();

    // Construct an AXIOS request
    try {
      const res = await axios.post<Todo>(
        "http://localhost:5000/api/new",
        { title },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      // Reset input field
      setTitle("");
      toast.success(res.data.message);
      location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col gap-3 w-full mb-10">
      <h2 className="text-2xl font-medium">Add a Todo</h2>
      <div className="w-full flex items-center justify-between">
        <input
          type="text"
          placeholder="Groceries"
          className="input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button
          className="px-10 py-3 bg-gray-950 border rounded-sm cursor-pointer hover:bg-gray-900 transition"
          onClick={handleSubmit}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default InputGrp;

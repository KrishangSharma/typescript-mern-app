import InputGrp from "./InputGrp";
import TodoList from "./TodoList";

const TodoContainer = () => {
  return (
    <section className="w-2/3 p-4 mx-auto bg-gray-950 border border-slate-400 rounded-md">
      <InputGrp />
      <TodoList />
    </section>
  );
};

export default TodoContainer;

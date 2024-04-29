import "./App.css";
import { Navbar, TodoContainer } from "./components/exports";

function App() {
  return (
    <div className="w-full h-screen flex flex-col gap-10 text-gray-200 bg-gray-950">
      <Navbar />
      <TodoContainer />
    </div>
  );
}

export default App;

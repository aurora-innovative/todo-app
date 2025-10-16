import { useState } from "react";
import AddTodoInput from "./components/AddTodoInput";
import TodoLists from "./components/TodoLists";

function App() {
  const [todos, setTodos] = useState([
    {
      id: "1",
      text: "Hello test 1"
    },
    {
      id: "2",
      text: "Hello test 1"
    },
    {
      id: "3",
      text: "Hello test 1"
    },
  ])
  const addTodo = (text) => {
    const newTodo = {
      id: todos.length + 1,
      text
    }

    const newTodos = [...todos, newTodo]

    setTodos(newTodos)

  }

  const handleDelete = (id) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id)

    setTodos(filteredTodos)
  }

  return (
    <div className="w-full h-screen bg-gray-900 text-slate-100 gap-5 flex items-center justify-center flex-col">
      <h1 className="text-4xl font-bold">Todo App</h1>
      <AddTodoInput handleInput={addTodo} />
      <TodoLists todos={todos} handleDelete={handleDelete} />
    </div>
  )
}

export default App;

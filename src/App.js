import * as React from "react";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";

function App() {
  const [todoList, setTodoList] = React.useState([]);
  const [newTodo, setNewTodo] = React.useState("");
  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]);
    setNewTodo(newTodo);
  };
  return (
    <div>
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo= {addTodo}/>
      <TodoList todoList={todoList} />
    </div>
  );
}

export default App;

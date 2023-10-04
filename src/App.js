import * as React from "react";

const todoList = [
  { 
    id: 1,
    title: "Complete assignment 1" 
  },
  { 
    id: 2,
    title: "Read a book" 
  },
  { 
    id: 3,
    title: "Go for a run"
  },
];

function App() {
  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todoList.map(function (item) {
          <li key={item.id}>{item.title}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;

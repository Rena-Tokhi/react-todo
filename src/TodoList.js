import React from "react";

const todoList = [
    {
      id: 1,
      title: "Complete assignment 1",
    },
    {
      id: 2,
      title: "Read a book",
    },
    {
      id: 3,
      title: "Go for a run",
    },
  ];
  
function TodoList (){
    return(
        <ul>
        {todoList.map((item) =>
          <li key={item.id}>{item.title}</li>
        )}
      </ul>
    );
}

export default TodoList;
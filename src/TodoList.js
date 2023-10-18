import React from "react";
import TodoListItem from "./TodoListItem";

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
          <TodoListItem key={item.id} todo={item} />
        )}
      </ul>
    );
}

export default TodoList;

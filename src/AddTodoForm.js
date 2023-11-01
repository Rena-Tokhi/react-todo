import React from "react";

function AddTodoForm(props) {
  const [todoTitle, setTodoTitle] = React.useState("");

  const handleTitleChange = (event) => {
    const newTodoTitle = event.target.value;
    setTodoTitle(newTodoTitle);
  };

  function handleAddTodo(event) {
    event.preventDefault();

    const newTodo = {
      title: todoTitle,
      id: Date.now(),
    };

    props.onAddTodo(newTodo);
    console.log(todoTitle);
    setTodoTitle("");
    
  }
  return (
    <form onSubmit={handleAddTodo}>
      <label htmlFor="todoTitle">Title</label>
      <input
        id="todoTitle"
        name="title"
        value={todoTitle}
        onChange={handleTitleChange}
        placeholder="Enter title here..."
        required
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddTodoForm;

import { useRef, useState } from "react";
import "./Css/Todo.css";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const inputRef = useRef(null);

  return (
    <div className="todo">
      <div className="todo-header">ToDo List</div>
      <div className="todo-add">
        <input
          ref={inputRef}
          type="text"
          placeholder="Add a new task"
          className="todo-input"
        />
        <button className="todo-add-btn">ADD</button>
      </div>
      <div className="todo-list"></div>
    </div>
  );
};

export default Todo;

import { useEffect, useRef, useState } from "react";
import "./Css/Todo.css";
import TodoItems from "./TodoItems";

let count = 0;
const Todo = () => {
  const [todos, setTodos] = useState([]);
  const inputRef = useRef(null);

  const add = () => {
    setTodos([
      ...todos,
      { no: count++, text: inputRef.current.value, display: "" },
    ]);
    inputRef.current.value = "";
    localStorage.setItem("todos_count", count);
  };

  useEffect(() => {
    setTodos(JSON.parse(localStorage.getItem("todos"))); // getting todos array from local storage
    count = localStorage.getItem("todos_count");
  }, []); // empty array means this function will be called only once (when the component is mounted)

  useEffect(() => {
    setTimeout(() => {
      console.log(todos);
      localStorage.setItem("todos", JSON.stringify(todos)); // storing todos array in local storage
    }, 100);
    // when the todos array changes, this function will be called
  }, [todos]);

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
        <button
          className="todo-add-btn"
          onClick={() => {
            add();
          }}
        >
          ADD
        </button>
      </div>
      <div className="todo-list">
        {todos.map((item, index) => {
          return (
            <TodoItems
              key={index}
              no={item.no}
              display={item.display}
              text={item.text}
              setTodos={setTodos}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Todo;

import "./Css/TodoItems.css";
import Tick from "./Assets/tick.png";
import NotTick from "./Assets/not_tick.png";
import Cross from "./Assets/cross.png";
import PropTypes from "prop-types";

const TodoItems = ({ no, display, text, setTodos }) => {
  const deleteTodo = (no) => {
    let data = JSON.parse(localStorage.getItem("todos"));
    data = data.filter((todo) => todo.no !== no);
    setTodos(data);
  };

  const toggle = () => {
    let data = JSON.parse(localStorage.getItem("todos"));

    for (let i = 0; i < data.length; i++) {
      if (data[i].no === no) {
        if (data[i].display === "") {
          data[i].display = "line-through";
        } else {
          data[i].display = "";
        }
        break;
      }
    }

    setTodos(data);
  };

  return (
    <div className="todo-items">
      <div
        className={`todo-items-container ${display}`}
        onClick={() => {
          toggle(no);
        }}
      >
        {display === "" ? (
          <img src={NotTick} alt="" />
        ) : (
          <img src={Tick} alt="" />
        )}

        <div className="todo-items-text">{text}</div>
      </div>
      <img
        className="todo-items-cross-icon"
        onClick={() => {
          deleteTodo(no);
        }}
        src={Cross}
        alt=""
      />
    </div>
  );
};

TodoItems.propTypes = {
  no: PropTypes.number,
  display: PropTypes.string,
  text: PropTypes.string,
  setTodos: PropTypes.func,
};

// MyComponent.propTypes = {
//     // You can declare that a prop is a specific JS primitive.
//     // By default, these are all optional.
//     optionalArray: PropTypes.array,
//     optionalBigInt: PropTypes.bigint,
//     optionalBool: PropTypes.bool,
//     optionalFunc: PropTypes.func,
//     optionalNumber: PropTypes.number,
//     optionalObject: PropTypes.object,
//     optionalString: PropTypes.string,
//     optionalSymbol: PropTypes.symbol,
//   }

export default TodoItems;

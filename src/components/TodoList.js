import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { toogle,destroy } from "../redux/todos/todosSlice";

const TodoList = () => {
  const items = useSelector((state) => state.todo.items);
  const dispatch = useDispatch();

  handleDestroy

  return (
    <div>
      <ul className="todo-list">
        {items.map((item) => (
          <li key={item.id} className={item.completed ? "completed" : ""}>
            <div className="view">
              <input
                className="toggle"
                type="checkbox"
                checked={item.completed}
                onChange={() => dispatch(toogle(item.id))}
              />
              <label>{item.title}</label>
              <button className="destroy" onClick={()=> handleDestroy}></button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;

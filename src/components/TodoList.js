import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { toogle, destroy } from "../redux/todos/todosSlice";

const TodoList = () => {
  const items = useSelector((state) => state.todo.items);
  const dispatch = useDispatch();
  const activeFilter = useSelector((state) => state.todo.activeFilter);

  let filtered = [];
  const handleDestroy = (id) => {
    if (window.confirm("Are u sure?")) {
      dispatch(destroy(id));
    }
  };

  filtered = items;
  if (activeFilter !== "all") {
    filtered = items.filter((todo) =>
      activeFilter === "active"
        ? todo.completed === false
        : todo.completed === true
    );
  }

  return (
    <div>
      <ul className="todo-list">
        {filtered.map((item) => (
          <li key={item.id} className={item.completed ? "completed" : ""}>
            <div className="view">
              <input
                className="toggle"
                type="checkbox"
                checked={item.completed}
                onChange={() => dispatch(toogle(item.id))}
              />
              <label>{item.title}</label>
              <button
                className="destroy"
                onClick={() => handleDestroy(item.id)}
              ></button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;

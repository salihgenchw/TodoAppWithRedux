import {useState} from "react";
import { addNewItem } from '../redux/todos/todosSlice'
import { useDispatch } from "react-redux";
import { nanoid } from '@reduxjs/toolkit'

const Form = () => {

  const dispatch = useDispatch()
  const [title, setTitle] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addNewItem({
      id:nanoid(),
      title,
      completed:false
    }))
    setTitle("")
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          onChange={(e)=> setTitle(e.target.value)}
          value={title}
        />
      </form>
    </div>
  );
};

export default Form;

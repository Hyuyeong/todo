import { useRef, useState } from 'react';
import Card from '../layout/Card';

import axios from 'axios';

const Todo = props => {
  // const [toDo, setToDo] = useState();

  // const [error, setError] = useState(false);
  // const errorHandler = e => {
  //   setError();
  // };

  const inputRef = useRef();

  // const toDoHandler = e => {
  //   setToDo(e.target.value);
  // };

  const submitHandler = e => {
    e.preventDefault();

    if (inputRef.current.value.trim().length === 0) return;

    // props.onList({
    //   list: toDo,
    //   id: Math.random(),
    // });

    let newTodo = {
      list: inputRef.current.value,
    };

    axios.post('/api/new', newTodo).then(response => response.data);
    inputRef.current.value = '';

    // setToDo('');

    // console.log(newTodo);
  };

  return (
    <Card>
      <form className="form" onSubmit={submitHandler}>
        <label htmlFor="todo">Write down To Do List</label>
        <input
          // onChange={toDoHandler}
          // value={toDo}
          type="text"
          id="todo"
          ref={inputRef}
        />
        <button type="submit"> ADD</button>
      </form>
    </Card>
  );
};
export default Todo;

import { useState } from 'react';
import Todo from './components/Todo';
import List from './components/List';

function App() {
  const [todoList, setTodoList] = useState([]);

  const todoListHandler = newList => {
    setTodoList(prevList => {
      return [...prevList, newList];
    });
  };

  // console.log(todoList);
  return (
    <div>
      <Todo onList={todoListHandler} />
      <List onData={todoList} />
    </div>
  );
}

export default App;

import { useState, useEffect } from 'react';
//import styles from './List.module.css'

import axios from 'axios';

import Card from '../layout/Card';

const List = props => {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    axios.get('/api/find').then(response => setTodoList(response.data));
  }, [todoList]);

  // useEffect(() => {
  //   axios
  //     .get(
  //       'https://3sb655pz3a.execute-api.ap-southeast-2.amazonaws.com/live/product'
  //     )
  //     .then(response => setTodoList(response.data));
  // }, []);

  // console.log(todoList);

  return (
    // <Card>
    //   {props.onData.map(item => (
    //     <li>{item.list}</li>
    //   ))}
    // </Card>

    <Card>
      {todoList.map(item => (
        <li key={item._id}>{item.list}</li>
      ))}
    </Card>
  );
};
export default List;

// https:intense-spire-73918.herokuapp.com

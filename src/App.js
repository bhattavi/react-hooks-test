import React, {useState, useEffect} from 'react';
import Form from './Form'
import Todo from './Todo'

function App() {

  const [input, setInput] = useState('');

  const [todo, setTodo] = useState([])

 


  return (
    <div>
      <h1>{input}</h1>
      <Form input = {input}  setInput = {setInput} todo={todo} setTodo={setTodo}/>
      <Todo todo= {todo}/>
    </div>
  );
}

export default App;

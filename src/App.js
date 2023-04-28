import React, {useState} from 'react';
import './App.css';

function App() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] =useState([]);

  const changeInput = (event)=>{
    setTodo(event.target.value);
  };

  const onSubmit = (event)=>{
    const newTodo = {
      id: todo.length,
      todo
    };
    setTodoList([...todoList, newTodo]);
    setTodo("");
    event.preventDefault();
  };

  const onDelete =(id)=>{
    setTodoList(todoList.filter(item=>item.id !== id));
  };

  return (
    <div className="App">
      <form onSubmit={onSubmit}>
        <input type='text' value={todo} onChange={changeInput}></input>
        <button type='button'>추가하기</button>
      </form>
      {todoList.map((todoItem, index) =>(
  	    <div key={index}>
          <span>{todoItem.todo}</span>
          <button type='button' onClick={() => onDelete(todoItem.id)}
>X</button>
  	    </div>
      ))}
    </div>
  );
}

export default App;

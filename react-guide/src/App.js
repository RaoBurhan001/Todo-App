import React,{useEffect, useState} from 'react';
import Form from './Components/Form';
import ToDo from './Components/TodoList';
import './App.css';

const App=()=> {
  const [inputText , SetinputText]= useState(" ");
  const  [ Todo , SetTodo] = useState([]);  
  const [status, Setstatus] = useState('all')
  const  [filteredTodo , SetfilteredTodo ] = useState([]);


const FilteredTodoHandler  = ()=>{
  // console.log("STATUS",status)

  switch(status)
  {
    case 'completed':
      SetfilteredTodo( Todo.filter(todo => todo.completed === true))
      break;

      case 'uncompleted':
        SetfilteredTodo( Todo.filter(todo => todo.completed === false))
        break;
    default:
      SetfilteredTodo(Todo)
      break;
  }
  // console.log(filteredTodo)
  }
const Todolocalstorage = ()=>{
  localStorage.setItem("Todo", JSON.stringify(Todo))
  
}

const SaveTodolocalstorage = ()=>{
if(localStorage.getItem("Todo") === null)
{
  localStorage.setItem("Todo", JSON.stringify([]))
}
else{
let Todolocal = JSON.parse(localStorage.getItem("Todo"))
SetTodo(Todolocal)
}}

useEffect(()=>{
  SaveTodolocalstorage()
},[])
useEffect(()=>{
  FilteredTodoHandler()
  Todolocalstorage()
},[Todo , status])


  return (
      <div className="App">
       
<header>
  Rao's To-Do List 
  </header>

  <Form    SetinputText = {SetinputText} 
  inputText={inputText}
  Todo = {Todo}
  SetTodo={SetTodo}
  Setstatus={Setstatus}
  />

  <ToDo Todo = {Todo} SetTodo={SetTodo} filteredTodo={filteredTodo} />
      </div>
    );
  
}

export default App;

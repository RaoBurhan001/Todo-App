import React from 'react';
import Todo  from './Todo';
const TodoList  = (props)=>{

  return (
        <div className="todo-container">
        <ul className="todo-list"> 
       {
         props.filteredTodo.map(todo=>(
           <Todo
            todo = {todo} 
           text={todo.text} 
           key={todo.id} 
           Todo = {props.Todo} 
           SetTodo={props.SetTodo}
           filteredTodo={props.filteredTodo}
           />
         ))
       }
       </ul>
      </div>
    
    )
}

export default TodoList;
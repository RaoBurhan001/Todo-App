import React from 'react';

const Todo = (props)=>{
  
   
   const deletehandler = ()=>{
    //    console.log(props.Todo)
      props.SetTodo(props.Todo.filter ((e)=> e.id !== props.todo.id)) 
      // props.todo.filter(e=> e.id!== props.todo.id)
   }

   const completedHandler =()=>{
    
           props.SetTodo(props.Todo.map((item) => {
         

            if(item.id === props.todo.id)
            {
                // console.log("Completed")
                return {
                    ...item,
                   completed : !item.completed
                }
            }
            return item;
        }
            ))
       
   }

    return(
      
        <div className = 'todo'>
            <li  className= {`todo-item ${props.todo.completed ? "completed" : ""}`}> {props.text}</li>
            <button onClick = {completedHandler}className = 'complete-btn'>
                <i className = 'fas fa-check'></i>
            </button>
            <button onClick = {deletehandler}className = 'trash-btn'>
                <i className = 'fas fa-trash'></i>
            </button>
            
        </div>
    )
}

export default Todo;
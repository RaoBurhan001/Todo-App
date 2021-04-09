import React from 'react';

const Form = (props)=>{
    
    const InputChangeHandler=(e)=>{
      props.SetinputText(e.target.value)
     
    }

    const TodoHandler = (e)=>{
     e.preventDefault()
        props.SetTodo([
        ...props.Todo,
        {
        text:props.inputText,
        completed: false,
        id: Math.random()*1000
        }

      ])
      props.SetinputText('');
        
    }

    const StatusHandler=(e)=>{
      // console.log(e.target.value)
      props.Setstatus(e.target.value)
    }

    return(
        <form>
        <input  value = {props.inputText }onChange={InputChangeHandler} type="text" className="todo-input" />
        <button  onClick = {TodoHandler} className="todo-button" type="submit">
          <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
          <select onChange={StatusHandler} name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    )
}
export default Form;
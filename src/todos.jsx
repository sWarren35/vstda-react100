import React from 'react';

const TodosList = props => (
 
  <div className="panel panel-default">
  <div className="panel-heading">Your Current Todos</div>
  {props.id === 0 ? (<div className="alert-success panel-body"><strong>Welcome!</strong><div>Please Add a Todo On The Left To Get Started</div></div>) : (<div className="panel-body"></div>)}
    <ul className= "list-group">
      {props.todosArray.map(todo => {
          return <li className= {todo.completed ? "strike-through alert alert-success" : (todo.priority === 1 ? "alert alert-info" : todo.priority === 2 ? "alert alert-warning" : "alert alert-danger")}
          role="alert" key ={todo.id}><input className="form-check-input" type="checkbox" onChange= {() => props.onDone(todo)}/>{todo.text}<a className="delete-todo glyphicon glyphicon-trash pull-right"  onClick={() => props.onDelete(todo)}
          href="#"></a><a className="edit-todo glyphicon glyphicon-edit pull-right" onClick={() => props.onEdit(todo)}
          href="#"></a></li>
        })
      }
    </ul>
  </div>
 )
 
export default TodosList;

       

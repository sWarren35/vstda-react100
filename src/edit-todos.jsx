import React from 'react';

const EditTodos = props => (
    <div>
        <div className="panel panel-default">
        <div className="panel-heading">Edit Todo Item</div>
        <div className="panel-body">
        <textarea 
         className="update-todo-text"
         value={props.value} 
         onChange={props.onTextChange}>
        </textarea>
        </div>
        <div className="form-group edit-form">
        <label className="label-move">&nbsp;Priority:&nbsp;</label>
        <input className="update-todo-priority" list="priority" onChange={props.changePriority} />
        
        <datalist id="priority">
          <option value="Choose A Priority"></option>
          <option value="1">Low</option>
          <option value="2">Medium</option>
          <option value="3">High</option>
        </datalist>
        <button className="edit-btn btn blueish mini update-todo" onClick={() => props.onSave(event)}>Save</button>
        </div>
        <br/>
        <br/>
        <ul className = "list-group">
        {props.todosArray.map(todo => {
            return <li className={todo.completed ? "strike-through alert alert-success" : (todo.priority === 1 ? "alert alert-info" : todo.priority === 2 ? "alert alert-warning" : "alert alert-danger")} key ={todo.id}><input className="form-check-input"type="checkbox" onChange= {() => props.onDone(todo)}/>{todo.text}<a onClick={() => props.onDelete(todo)}
            className="delete-todo glyphicon glyphicon-trash pull-right" href="#"></a><a onClick={() => props.onEdit(todo)}
            className="edit-todo glyphicon glyphicon-edit pull-right" href="#"></a></li>
            })
        }
        </ul>
      </div>
    </div>
);

export default EditTodos;
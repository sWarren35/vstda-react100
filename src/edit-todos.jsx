import React from 'react';

const EditTodos = props => (
    <div>
        <div className="container">
        <div className="col-md-6">
        <div className="panel panel-default">
        <div className="panel-heading">Edit Todo Item</div>
     
        <textarea 
         className="update-todo-text"
         value={props.value} 
         onChange={props.onTextChange}>
        </textarea>

        <label>How much of a priority is this?</label>
        <input className="update-todo-priority" list="priority" onChange={props.changePriority} />
        <datalist id="priority">
          <option value="1">Low</option>
          <option value="2">Medium</option>
          <option value="3">High</option>
        </datalist>
    
        <ul className = "list-group">
        <button className="update-todo" onClick={() => props.onSave(event)}>Save</button>
        {props.todosArray.map(todo => {
            return <li className={`list-group-item ${todo.completed ? " strike-through" : ""}`} key ={todo.id}><input type="checkbox" onChange= {() => props.onDone(todo)}/>{todo.text}<a onClick={() => props.onDelete(todo)}
            className="delete-todo glyphicon glyphicon-trash pull-right" href="#"></a><a onClick={() => props.onEdit(todo)}
            className="edit-todo glyphicon glyphicon-edit pull-right" href="#"></a></li>
            })
        }
                
        </ul>

      </div>
      </div>
      </div>

    </div>
);

export default EditTodos;
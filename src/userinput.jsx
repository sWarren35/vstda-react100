import React from "react";

const Userinput = props => {
 
  return(
    
  <div>
      <div className="container">
      <div className="front">
      <div className="col-md-6">
      <div className="panel panel-default">
      <div className="panel-heading">Add Todo Item</div>
  
       
        <textarea 
          className="create-todo-text"
          value={props.value} 
          onChange={props.onChange}>
        </textarea>
        
        <button className="create-todo" onClick={props.onSubmit}>Add To-Do</button>
        
        <label>How much of a priority is this?</label>
        <select className="create-todo-priority" onChange={props.changePriority}>
          <option value="1">Low</option>
          <option value="2">Medium</option>
          <option value="3">High</option>
        </select>
    
      </div>
      </div>
      </div>
      </div>
  </div>
  )  
}
export default Userinput;
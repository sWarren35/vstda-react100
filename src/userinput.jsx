import React from "react";

const Userinput = props => {
 
  return(
    
  <div>
      <div className="front">
      <div className="panel panel-default">
      <div className="panel-heading">Add Todo Item</div>
  
       
        <textarea 
          className="create-todo-text"
          value={props.value} 
          onChange={props.onChange}>
        </textarea>
        
        <button className="create-todo move-btn" onClick={props.onSubmit}>Add To-Do</button>
        
        <label className="label-move">How much of a priority is this?</label>
        <select className="create-todo-priority move-dropdown" onChange={props.changePriority}>
          <option value="1">Low</option>
          <option value="2">Medium</option>
          <option value="3">High</option>
        </select>
    
      </div>
      </div>
  </div>
  )  
}
export default Userinput;
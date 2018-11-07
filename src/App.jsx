import React, { Component } from 'react';
import Userinput from "./userinput";
import TodosList from "./todos";
import EditTodos from "./edit-todos";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      text: '',
      editText: '',
      editId: '',
      priority: 1,
      isEdit: false,
      todos:[]
    };
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePriorityChange = this.handlePriorityChange.bind(this);
    this.handleDelete= this.handleDelete.bind(this);
    this.handleEdit=this.handleEdit.bind(this);
    this.handleCompletedTodo=this.handleCompletedTodo.bind(this);
    this.handleSave=this.handleSave.bind(this);
    this.handleEditChange=this.handleEditChange.bind(this);
  }

 handleTextChange(e)  {   
    this.setState
    ({text:e.target.value})
  }
  
  handlePriorityChange(e) {
    this.setState
    ({priority: parseInt(e.target.value)})
  }

  handleSubmit(event) {
    this.setState({
      id: this.state.id + 1,
      text: '',
      editText: '',
      priority: this.state.priority,
      isEdit: false,
      editId: '',
      completed: false,
      todos: [...this.state.todos, {id:this.state.id, text:this.state.text, isEdit: this.state.isEdit, priority: this.state.priority, completed: false}]
    });
    console.log(this.state.todos)
    event.preventDefault();
  }

  handleDelete(todo) {
    var newState = this.state.todos;
    for(var i = 0; i< newState.length; i++){
      if(newState[i].id == todo.id){
        newState.splice(i, 1);
      }
    }
    this.setState({id: todo.id, newState:todo})
  }

  handleEditChange(e) {
    this.setState
    ({editText:e.target.value})
  }
 
  handleEdit(todo) {
    this.setState({ 
    text:'',
    isEdit: true,
    editText:todo.text, 
    editId: todo.id,
    priority: todo.priority,
   });
  }

  handleSave(){
    var edited = this.state.editId;
    var found = this.state.todos.find(todo=>todo.id === edited);
      if(found) found.text = this.state.editText;
      if(found) found.priority = this.state.priority;
      if(found) found.isEdit = false;
    this.setState({ 
      isEdit: false, todos: [...this.state.todos]});
    event.preventDefault();
  }

  handleCompletedTodo(todo) {
    var completedTodoId = todo.id;
    var found = this.state.todos.find(todosArray=>todosArray.id === completedTodoId);
      if(found) found.completed = !found.completed;
      this.setState({todos: [...this.state.todos]});
  }
  
    
  
render() {
    return(
       <div className="container">
       <div className="col-md-6">

          
       <Userinput 
       value={this.state.text} 
       onChange={this.handleTextChange} 
       onSubmit={this.handleSubmit}
       changePriority={this.handlePriorityChange}
       />
       </div>
       <div className="col-md-6">
       {!this.state.isEdit &&
       <TodosList
       todosArray={this.state.todos}
       onDone={this.handleCompletedTodo}
       onEdit={this.handleEdit}
       onDelete={this.handleDelete}
       />
      }
      
      {this.state.isEdit &&
      <EditTodos
      todosArray={this.state.todos}
      value={this.state.editText} 
      onEdit={this.handleEdit}
      onDelete={this.handleDelete}
      onSave={this.handleSave}
      onTextChange={this.handleEditChange} 
      changePriority={this.handlePriorityChange}
      onDone={this.handleCompletedTodo}
      /> 
      }
      </div>
      </div>
      );
    }
  }

  
export default App;

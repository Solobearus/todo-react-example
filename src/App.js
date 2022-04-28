import React from 'react';
import './App.css';

const ENTER = 13;

class App extends React.Component {

  state = {
    currentId: 0,
    todos: {},
    inputText: '',
  };

  componentWillMount() {
    document.addEventListener("keydown", this.onKeyPressed.bind(this));
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.onKeyPressed.bind(this));
  }

  onInputChange = (e) => {
    this.setState({
      ...this.state,
      inputText: e.target.value
    })
  }

  onDeletePress = (id) => {
    const newTodos = {...this.state.todos};
    delete newTodos[id];

    this.setState({
      ...this.state,
      todos: newTodos
    })
  }

  onDonePress = (id) => {
    const newTodos = {...this.state.todos};
    newTodos[id].done = !newTodos[id].done;

    this.setState({
      ...this.state,
      todos: newTodos
    })
  }

  onKeyPressed(e) {
    if(e.keyCode === ENTER && this.state.inputText !== ''){
      const newTodos = {...this.state.todos};
      newTodos[this.state.currentId] = {
        text: this.state.inputText,
        done: false,
      };

      this.setState({
        ...this.state,
        todos: newTodos,
        inputText: '',
        currentId: this.state.currentId +1
      })
    }
  }

  render() {
    return <div className={"wrapper"}>
      <div className={"wrapperItem"}>
        <input value={this.inputText} onChange={(e) => this.onInputChange(e)} className={"input"}/>
      </div>
      <div className={"wrapperItem wrapperItemTodoList"}>
        <div className={"todoList"}>
          {Object.keys(this.state.todos).map((id) => {
            return (
                <div key={id} className={"listItem"}>
                  <div onClick={() => this.onDonePress(id)}>{this.state.todos[id].done ? '✖︎' : '✔︎'}️</div>
                  <div className={this.state.todos[id].done? "done" : ""}>{this.state.todos[id].text}</div>
                  <div onClick={() => this.onDeletePress(id)}>🗑</div>
                </div>
            )
          })}
        </div>
      </div>
      <div className={"wrapperItem"}>
        Todos left: {Object.keys(this.state.todos).filter(key => !this.state.todos[key].done).length}
      </div>
    </div>
  }
}


export default App;

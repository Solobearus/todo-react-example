import React, {useEffect, useState} from 'react';
import './App.css';

const ENTER = 13;

const App = () => {

  const [currentId, setCurrentId] = useState(0);
  const [todos, setTodos] = useState({});
  const [inputText, setInputText] = useState('');

  useEffect(() => {
    document.addEventListener("keydown", onKeyPressed);

    return () => {
      document.removeEventListener("keydown", onKeyPressed);
    }
  })

  const onInputChange = (e) => {
    setInputText(e.target.value)
  }

  const onDeletePress = (id) => {
    const newTodos = {...todos};
    delete newTodos[id];
    setTodos(newTodos)
  }

  const onDonePress = (id) => {
    const newTodos = {...todos};
    newTodos[id].done = !newTodos[id].done;
    setTodos(newTodos)
  }

  const onKeyPressed = (e) => {
    if(e.keyCode === ENTER && inputText !== ''){
      const newTodos = {...todos};

      newTodos[currentId] = {
        text: inputText,
        done: false,
      };

      setTodos(newTodos);
      setCurrentId(currentId +1);
      setInputText('');
    }
  }


    return <div className={"wrapper"}>
      <div className={"wrapperItem"}>
        <input value={inputText} onChange={(e) => onInputChange(e)} className={"input"}/>
      </div>
      <div className={"wrapperItem wrapperItemTodoList"}>
        <div className={"todoList"}>
          {Object.keys(todos).map((id) => {
            return (
                <div key={id} className={"listItem"}>
                  <div onClick={() => onDonePress(id)}>{todos[id].done ? '✖︎' : '✔︎'}️</div>
                  <div className={todos[id].done? "done" : ""}>{todos[id].text}</div>
                  <div onClick={() => onDeletePress(id)}>🗑</div>
                </div>
            )
          })}
        </div>
      </div>
      <div className={"wrapperItem"}>
        Todos left: {Object.keys(todos).filter(key => !todos[key].done).length}
      </div>
    </div>
}


export default App;

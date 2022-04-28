import React, { useEffect, useState } from "react";
import "./App.css";
import {
  onInputChange,
  onDeletePress,
  onKeyPressed,
  onDonePress,
} from "./store/TodoSlice";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  const dispatch = useDispatch();

  const todos = useSelector((state) => state.todos.todos);
  const inputText = useSelector((state) => state.todos.inputText);

  const dispatchOnKeyPressed = (e) => {
    dispatch(onKeyPressed(e));
  };
  useEffect(() => {
    document.addEventListener("keydown", dispatchOnKeyPressed);

    return () => {
      document.removeEventListener("keydown", dispatchOnKeyPressed);
    };
  });

  return (
    <div className={"wrapper"}>
      <div className={"wrapperItem"}>
        <input
          value={inputText}
          onChange={(e) => dispatch(onInputChange(e.target.value))}
          className={"input"}
        />
      </div>
      <div className={"wrapperItem wrapperItemTodoList"}>
        <div className={"todoList"}>
          {Object.keys(todos).map((id) => {
            return (
              <div key={id} className={"listItem"}>
                <div onClick={() => dispatch(onDonePress(id))}>
                  {todos[id].done ? "✖︎" : "✔︎"}️
                </div>
                <div className={todos[id].done ? "done" : ""}>
                  {todos[id].text}
                </div>
                <div onClick={() => dispatch(onDeletePress(id))}>🗑</div>
              </div>
            );
          })}
        </div>
      </div>
      <div className={"wrapperItem"}>
        Todos left:{" "}
        {Object.keys(todos).filter((key) => !todos[key].done).length}
      </div>
    </div>
  );
};

export default App;

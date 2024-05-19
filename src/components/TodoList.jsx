import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, toggleCompletionHandler, clickDeleteHandler }) {
  return (
    <div className="todoLists">
      <section className="working">
        <h3 className="workingTitle">Working..🔥</h3>
        <TodoItem
          isDone={false}
          todos={todos}
          toggleCompletionHandler={toggleCompletionHandler}
          clickDeleteHandler={clickDeleteHandler}
        />
      </section>
      <section className="done">
        <h3 className="doneTitle">Done..!🎉</h3>
        <TodoItem
          isDone={true}
          todos={todos}
          toggleCompletionHandler={toggleCompletionHandler}
          clickDeleteHandler={clickDeleteHandler}
        />
      </section>
    </div>
  );
}

export default TodoList;

import React from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function TodoContainer({
  siteTitle,
  siteSubTitle,
  todos,
  title,
  setTitle,
  content,
  setContent,
  clickAddTodoHandler,
  toggleCompletionHandler,
  clickDeleteHandler,
}) {
  return (
    <div className="layout">
      <div className="title">
        <div className="title1">{siteTitle}</div>
        <div className="title2">{siteSubTitle}</div>
      </div>
      <TodoForm
        title={title}
        setTitle={setTitle}
        content={content}
        setContent={setContent}
        clickAddTodoHandler={clickAddTodoHandler} // 제출
      />
      <TodoList
        todos={todos}
        toggleCompletionHandler={toggleCompletionHandler}
        clickDeleteHandler={clickDeleteHandler}
      />
    </div>
  );
}

export default TodoContainer;

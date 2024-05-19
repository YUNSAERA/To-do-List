import React from "react";

function TodoForm({
  title,
  setTitle,
  content,
  setContent,
  clickAddTodoHandler,
}) {
  return (
    <div className="inputArea">
      <div className="titleText">제목 :</div>
      <input
        className="inputTitle"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <div className="contentText">내용 :</div>
      <input
        className="inputContent"
        value={content}
        onChange={(event) => setContent(event.target.value)}
      />
      <button className="addWork" onClick={clickAddTodoHandler}>
        추가하기
      </button>
    </div>
  );
}

export default TodoForm;

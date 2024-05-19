import React from "react";

function TodoItem({
  isDone,
  todos,
  toggleCompletionHandler,
  clickDeleteHandler,
}) {
  let doneText = isDone ? "done" : "working";
  let btnText = isDone ? "취소" : "완료";
  return (
    <div className={doneText + "List"}>
      {todos
        .filter((item) => item.isDone === isDone)
        .map((item) => (
          <div key={item.id} className={doneText + "Component"}>
            <div className="content">
              <h3>{item.title}</h3>
              <p>{item.content}</p>
            </div>
            <div className="buttons">
              <button
                className="deleteWork"
                onClick={() => clickDeleteHandler(item.id)}
              >
                삭제하기
              </button>
              <button
                className="completeWork"
                onClick={() => toggleCompletionHandler(item.id)}
              >
                {btnText}
              </button>
            </div>
          </div>
        ))}
    </div>
  );
}

export default TodoItem;

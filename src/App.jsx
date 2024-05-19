import React, { useState } from "react";
import "./App.css";
import TodoContainer from '../src/components/TodoContainer';

function App() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [todos, setTodos] = useState([
    {
      id: Date.now(),
      title: "순공 시간 확인하기",
      content: "순공 시간 체크해서 공부해봅시다.",
      isDone: true,
    },
  ]);

  const clickAddTodoHandler = () => {
    if (title.trim() && content.trim()) {
      setTodos([...todos, { id: Date.now(), title, content, isDone: false }]);
      setTitle("");
      setContent("");
    }
  };

  const toggleCompletionHandler = (id) => {
    setTodos(
      todos.map((item) =>
        item.id === id ? { ...item, isDone: !item.isDone } : item
      )
    );
  };

  const clickDeleteHandler = (id) => {
    setTodos(todos.filter((item) => item.id !== id));
  };

  return (
    <TodoContainer
      siteTitle="My Todo List"
      siteSubTitle="React"
      todos={todos}
      title={title}
      setTitle={setTitle}
      content={content}
      setContent={setContent}
      clickAddTodoHandler={clickAddTodoHandler}
      toggleCompletionHandler={toggleCompletionHandler}
      clickDeleteHandler={clickDeleteHandler}
    />
  );
}

export default App;

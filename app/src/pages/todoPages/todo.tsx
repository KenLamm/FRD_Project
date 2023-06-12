
import React, { useState } from "react";
import { Link } from "react-router-dom";
import useStyles from "../../pages/todoPages/todoCss";

interface Todo {
  id: number;
  title: string;
  done: boolean;
}

const Todo: React.FC = () => {
  const { classes } = useStyles();
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, title: "降水控制", done: false },
    { id: 2, title: "地基檢測", done: false },
    { id: 3, title: "地基調平", done: false },
    { id: 4, title: "地基加強", done: false },
    { id: 5, title: "地基穩固", done: false },
    { id: 6, title: "結構支撐", done: false },
    { id: 7, title: "空隙填充", done: false },
    { id: 8, title: "沉降處理", done: false },
    { id: 9, title: "地基處理", done: false },
    { id: 10, title: "滲漏處理", done: false },
  ]);

  const handleToggleDone = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  const todoItems = todos.filter((todo) => !todo.done);
  const doneItems = todos.filter((todo) => todo.done);

  return (
    <div>
      <h1 className={classes.mainHeading}>地基工程</h1>

      <div className={classes.todoSection}>
        <div className={classes.todoColumn}>
          <h2>進行中</h2>
          <ul className={classes.todoList}>
            {todoItems.map((todo) => (
              <li key={todo.id} className={classes.todoItem}>
                {/* <Link to={`/details/${todo.id}`} className={classes.todoLink}> */}
                <Link to={`/WorkingFolder`} className={classes.todoLink}>
                  {todo.title}
                </Link>
                <button
                  className={classes.todoButton}
                  onClick={() => handleToggleDone(todo.id)}
                >
                  完成
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className={classes.doneColumn}>
          <h2>已完成</h2>
          <ul className={classes.doneList}>
            {doneItems.map((todo) => (
              <li key={todo.id} className={classes.doneItem}>
                <span className={classes.doneTitle}>{todo.title}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Todo;

import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import useStyles from "./taskCss";
import { useTask, TaskType, postTask } from "./taskAPI";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { queryClient } from "../app/App";
import { FaPlus } from "react-icons/fa";

// import { useQueryClient } from "@tanstack/react-query";

// interface Todo {
//   id: number;
//   title: string;
//   done: boolean;
// }

const Task: React.FC = () => {
  const params = useParams();
  const { classes } = useStyles();
  const result = useTask(params.id ?? "");

  // { id: 1, name: "降水控制", isFinished: false, user_id: 1, category_id: 1 },]
  // const [todos, setTodos] = useState<Todo[]>([
  //   { id: 1, title: "降水控制", done: false },
  //   { id: 2, title: "地基檢測", done: false },
  //   { id: 3, title: "地基調平", done: false },
  //   { id: 4, title: "地基加強", done: false },
  //   { id: 5, title: "地基穩固", done: false },
  //   { id: 6, title: "結構支撐", done: false },
  //   { id: 7, title: "空隙填充", done: false },
  //   { id: 8, title: "沉降處理", done: false },
  //   { id: 9, title: "地基處理", done: false },
  //   { id: 10, title: "滲漏處理", done: false },
  // ]);
  // const task = useTask();
  const queryClient = useQueryClient();
  const userTaskMutation = useMutation({
    mutationFn: (id: number) =>
      fetch(`${process.env.REACT_APP_API_URL}/task/update`, {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["useTask"] });
    },
  });
  const onAddTask = useMutation(
    async (data: { name: string; category_id: string }) =>
      postTask(data.name, data.category_id),
    {
      onSuccess: () => queryClient.invalidateQueries(["useTask"]),
    }
  );
  const [newTaskName, setNewTaskName] = useState("");
  const [isAddingTask, setIsAddingTask] = useState(false);

  const handleToggleDone = (id: number) => {
    userTaskMutation.mutate(id);
    console.log("handle toggle", id);
  };

  const handleAddTask = () => {
    onAddTask.mutate({ name: newTaskName, category_id: params.id ?? "" });
  };

  let todoItems: TaskType[] | undefined = [];
  let doneItems: TaskType[] | undefined = [];

  if (!result.isLoading) {
    const todos = result.data;
    todoItems = todos!.filter((todo) => !todo.is_finished);
    doneItems = todos!.filter((todo) => todo.is_finished);

    console.log("done", doneItems);
  }

  return (
    <div>
      <h1 className={classes.mainHeading}>地基工程</h1>
      {isAddingTask ? (
        <div>
          <input
            type="text"
            placeholder="Enter folder name"
            value={newTaskName}
            onChange={(e) => setNewTaskName(e.target.value)}
          />
          <button className={classes.addButton} onClick={handleAddTask}>
            <FaPlus className={classes.addIcon} />
          </button>
        </div>
      ) : (
        <button
          className={classes.addButton}
          onClick={() => setIsAddingTask(true)}
        >
          <FaPlus className={classes.addIcon} />
        </button>
      )}
      <div className={classes.todoSection}>
        <div className={classes.todoColumn}>
          <h2>進行中</h2>
          <ul className={classes.todoList}>
            {todoItems &&
              todoItems.map((todo) => (
                <li key={todo.id} className={classes.todoItem}>
                  {/* <Link to={`/details/${todo.id}`} className={classes.todoLink}> */}
                  <Link to={`/record/${todo.id}`} className={classes.todoLink}>
                    {todo.name}
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
                <span className={classes.doneTitle}>{todo.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Task;

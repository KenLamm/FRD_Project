import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import useStyles from "./taskCss";
import { useTask, TaskType, postTask, useCategoryName } from "./taskAPI";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { queryClient } from "../app/App";
import { FaPlus, FaRegPlusSquare, FaTrashAlt } from "react-icons/fa";
import { useViewportSize } from "@mantine/hooks";
import { Button, Modal } from "@mantine/core";
import createButton from "../../features/newProject/createButton";

// import { useQueryClient } from "@tanstack/react-query";

// interface Todo {
//   id: number;
//   title: string;
//   done: boolean;
// }

const Task: React.FC = () => {
  const params = useParams();
  const { classes } = useStyles();
  const result = useTask(params.cid ?? "", params.pid ?? "");
  const categoryName = useCategoryName(params.cid ?? "");
  const [newButtonName, setNewButtonName] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

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
    async (data: { name: string; category_id: string; project_id: string }) =>
      postTask(data.name, data.category_id, data.project_id),
    {
      onSuccess: () => queryClient.invalidateQueries(["useTask"]),
    }
  );
  const [newTaskName, setNewTaskName] = useState("");
  const [isAddingTask, setIsAddingTask] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewButtonName(event.target.value);
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setNewButtonName("");
  };
  const addButton = () => {
    setModalOpen(true);
    onAddTask.mutate({
      name: newButtonName,
      category_id: "",
      project_id: "",
    });
  };

  const handleNewTask = () => {
    setModalOpen(true);
  };

  const handleToggleDone = (id: number) => {
    userTaskMutation.mutate(id);
  };

  const handleAddTask = () => {
    onAddTask.mutate({
      name: newTaskName,
      category_id: params.cid ?? "",
      project_id: params.pid ?? "",
    });
  };

  let todoItems: TaskType[] | undefined = []; // useMemo
  let doneItems: TaskType[] | undefined = []; // useMemo

  if (!result.isLoading) {
    const todos = result.data;
    todoItems = todos!.filter((todo) => !todo.is_finished);
    doneItems = todos!.filter((todo) => todo.is_finished);
  }

  const viewport = useViewportSize();

  return (
    <div
      style={{
        minHeight: viewport.height,
        padding: "10px",
        height: "100%",
      }}
    >
      <h1 className={classes.mainHeading}>
        {categoryName.data && categoryName.data[0].name}
      </h1>
      {/* {isAddingTask ? ( */}
      <div>
        {/* <input
            type="text"
            placeholder="Enter folder name"
            value={newTaskName}
            onChange={(e) => setNewTaskName(e.target.value)}
          /> */}
        <div className={classes.centerStyle}>
          <Modal
            opened={modalOpen}
            onClose={closeModal}
            centered
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Modal.Header className={classes.alertTittle}>
              <Modal.Title>
                <div>Enter your new project name:</div>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div>
                <input
                  className={classes.alertInput}
                  type="text"
                  value={newButtonName}
                  onChange={handleInputChange}
                  style={{ width: "80%" }}
                />
              </div>
            </Modal.Body>
            <Modal.Body>
              <Button style={{ marginRight: "50px" }} onClick={handleAddTask}>
                Create Project
              </Button>
              <Button onClick={closeModal} variant="outline">
                Cancel
              </Button>
            </Modal.Body>
          </Modal>
        </div>

        <button className={classes.addButton} onClick={handleNewTask}>
          <FaPlus className={classes.addIcon} />
        </button>
      </div>
      {/* ) 
      : (
        <button
          className={classes.addButton}
          onClick={() => setIsAddingTask(true)}
        >
          <FaPlus className={classes.addIcon} />
        </button>)
        } */}
      <div className={classes.todoSection}>
        <div className={classes.todoColumn}>
          <h2 style={{ color: "#FFFFFF" }}>進行中</h2>
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
          <h2 style={{ color: "#FFFFFF" }}>已完成</h2>
          <ul className={classes.doneList}>
            {doneItems.map((todo) => (
              <li key={todo.id} className={classes.doneItem}>
                <Link to={`/record/${todo.id}`}>
                  <span className={classes.doneTitle}>{todo.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Task;

import { Link, useParams } from "react-router-dom";
import useStyles from "./taskCss";
import { useTask, TaskType, postTask, useCategoryName } from "./taskAPI";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FaPlus } from "react-icons/fa";
import { useViewportSize } from "@mantine/hooks";
import { useState } from "react";
import { Button, Modal } from "@mantine/core";

const Task: React.FC = () => {
  const params = useParams();
  const { classes } = useStyles();
  const result = useTask(params.cid ?? "", params.pid ?? "");
  const categoryName = useCategoryName(params.cid ?? "");
  const user = localStorage.getItem("role");
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

  const handleToggleDone = (id: number) => {
    userTaskMutation.mutate(id);
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setNewTaskName("");
  };

  const handleAddTask = () => {
    onAddTask.mutate({
      name: newTaskName,
      category_id: params.cid ?? "",
      project_id: params.pid ?? "",
    });
    closeModal();
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
        paddingBottom: "30%",
        height: "100%",
        backgroundColor: "#454545",
      }}
    >
      <div className={classes.mainHeading}>
        {categoryName.data && categoryName.data[0].name}
      </div>
      <div className={classes.buttonCreator}>
        <button className={classes.addButton} onClick={openModal}>
          <FaPlus className={classes.addIcon} />
        </button>
      </div>
      <div>
        <div className={classes.centerStyle}></div>
        <Modal
          opened={modalOpen}
          onClose={closeModal}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",

            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Modal.Header className={classes.alertTittle}>
            <Modal.Title style={{fontSize: "150%"}}>新增項目名稱:</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <input
              type="text"
              placeholder="輸入名稱"
              value={newTaskName}
              style={{width:"70%"}}
              onChange={(e) => setNewTaskName(e.target.value)}
            />
          </Modal.Body>
          <Modal.Body>
            <Button style={{ marginRight:"35%"}} onClick={handleAddTask}>創建</Button>
            <Button onClick={closeModal} variant="outline">
              取消
            </Button>
          </Modal.Body>
        </Modal>
      </div>

      <div className={classes.todoSection}>
        <div className={classes.todoColumn}>
          <h2 style={{ color: "#FFFFFF" }}>進行中</h2>
          <ul className={classes.todoList}>
            {todoItems &&
              todoItems.map((todo) => (
                <li key={todo.id} className={classes.todoItem}>
                  <Link to={`/record/${todo.id}`} className={classes.todoLink}>
                    {todo.name}
                  </Link>
                  {user === "manager" && (
                    <button
                      className={classes.todoButton}
                      onClick={() => handleToggleDone(todo.id)}
                    >
                      完成
                    </button>
                  )}
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

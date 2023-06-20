import useStyles from "./NewProjectCss";
import {
  FaPlus,
  FaProductHunt,
  FaRegPlusSquare,
  FaTrashAlt,
} from "react-icons/fa";
import React, { useState } from "react";
import { Button, Modal } from "@mantine/core";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createProject, useProject } from "./ProjectAPI";

const Project = () => {
  const { classes } = useStyles();
  const [buttons, setButtons] = useState<JSX.Element[]>([]);
  const [newButtonName, setNewButtonName] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [getProject, setGetProject] = useState();

  const navigate = useNavigate();
  const project = useProject();

  const queryClient = useQueryClient();
  const onCreateProject = useMutation(
    async (data: { name: string }) => createProject(data.name),
    {
      onSuccess: () => queryClient.invalidateQueries(["useProject"]),
    }
  );
  const onDeleteProject = useMutation(
    async (data: { name: string }) => deleteButton(data.name),
    {
      onSuccess: () => queryClient.invalidateQueries(["useProject"]),
    }
  );
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
    onCreateProject.mutate({ name: newButtonName });
  };

  const createButton = () => {
    if (newButtonName) {
      const newButton = (name: string) => (
        <div>
          <button className={classes.customButton}>{newButtonName}</button>
          <FaTrashAlt onClick={() => deleteButton(newButtonName)} />
        </div>
      );
      // setButtons((prevButtons) => [...prevButtons, newButton(newButtonName)]);
      addButton();
      closeModal();
    }
  };

  const deleteButton = (buttonName: string) => {
    setButtons((prevButtons) =>
      prevButtons.filter((button) => button.key !== buttonName)
    );
  };

  return (
    <div className={classes.bgColour}>
      <div className={classes.tittle}>工程項目</div>
      <div className={classes.buttonCreator + " outter_project"}>
        <button className={classes.addButton} onClick={openModal}>
          <FaPlus />
        </button>

        <div className={classes.buttonList + " project_list"}>
          {project.data?.map((elem, i) => {
            return (
              <div
                key={elem.id}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                {" "}
                {/* key={elem.id} */}
                <button
                  className={classes.customButton}
                  onClick={() => {
                    navigate(`/category/${elem.id}`);
                  }}
                >
                  {elem.name}
                </button>
                {/* <FaTrashAlt onClick={() => deleteButton("newButtonName")} /> */}
              </div>
            );
          })}

          {buttons}

          {/* {buttonStringArr.map((buttonStr) => (
          <div className={classes.buttonWrapper} key={buttonStr}>
            <button className={classes.customButton}>{buttonStr}</button>
            <FaTrashAlt onClick={() => deleteButton(buttonStr)} />
          </div>
        ))} */}
        </div>
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
              <Button style={{ marginRight: "50px" }} onClick={createButton}>
                Create Project
              </Button>
              <Button onClick={closeModal} variant="outline">
                Cancel
              </Button>
            </Modal.Body>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Project;

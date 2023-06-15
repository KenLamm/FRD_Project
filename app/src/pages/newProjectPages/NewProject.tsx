
import useStyles from "./NewProjectCss";
import { FaRegPlusSquare, FaTrashAlt } from "react-icons/fa";
import React, { useState } from "react";
import { Button, Modal, Text } from "@mantine/core";
import { Link, useParams } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createProject, useProject } from "./ProjectAPI";

const ButtonCreator = () => {
  const params = useParams()
  console.log(params)

  const { classes } = useStyles();
  const [buttons, setButtons] = useState<JSX.Element[]>([]);
  const [newButtonName, setNewButtonName] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  const project = useProject();

  const queryClient = useQueryClient();
  const onCreateProject = useMutation(
    async (data: {name: string}) => createProject(data.name),
    {
      onSuccess: () => queryClient.invalidateQueries(["project"])
    }
  )
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

  const createButton = () => {
    if (newButtonName) {
      // const newButton = (
      //   <div className={classes.buttonWrapper} key={newButtonName}>
      //     <button className={classes.customButton}>{newButtonName}</button>
      //     <FaTrashAlt onClick={() => deleteButton(newButtonName)} />
      //   </div>
      // );
      // setButtons((prevButtons) => [...prevButtons, newButton]);
      onCreateProject.mutate({name: newButtonName})
      closeModal();
    }
  };

  const deleteButton = (buttonName: string) => {
    setButtons((prevButtons) =>
      prevButtons.filter((button) => button.key !== buttonName)
    );
  };

  // Dummy Data Button
  const dummyButton = (
    <div className={classes.buttonWrapper} key="dummyButton">
      <button className={classes.customButton}>Dummy Button</button>
      <FaTrashAlt onClick={() => deleteButton("dummyButton")} />
    </div>
  );

  return (
    <div
      className={classes.buttonCreator}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <button className={classes.addButton} onClick={openModal}>
        <FaRegPlusSquare />
      </button>
      <div className={classes.buttonList}>
        {buttons}


        {/* {buttonStringArr.map((buttonStr) => (
          <div className={classes.buttonWrapper} key={buttonStr}>
               <button className={classes.customButton}>{buttonStr}</button>
               <FaTrashAlt onClick={() => deleteButton(buttonStr)} />
             </div>
        ))} */}

        <Link to="/task">{dummyButton}</Link>
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
                // style={{ width: "80%" }}
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
  );
};

export default ButtonCreator;

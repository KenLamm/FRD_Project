// import { FaRegPlusSquare } from "react-icons/fa";
// import React, { useState } from "react";
// import "./NewProject.css";

// const ButtonCreator = () => {
//   const [buttons, setButtons] = useState<JSX.Element[]>([]);

//   const createButton = () => {
//     const buttonName = window.prompt("Enter your new project name");
//     if (buttonName) {
//       const newButton = (
//         <button className="custom-button" key={buttonName}>
//           {buttonName}
//         </button>
//       );
//       setButtons((prevButtons) => [...prevButtons, newButton]);
//     }
//   };

//   return (
//     <div className="button-creator">
//       <button className="add-button" onClick={createButton}>
//         <FaRegPlusSquare />
//       </button>
//       <div className="button-list">{buttons}</div>
//     </div>
//   );
// };

// export default ButtonCreator;

// import { FaRegPlusSquare, FaTrashAlt } from "react-icons/fa";
// import React, { useState } from "react";
// import "./NewProject.css";

// const ButtonCreator = () => {
//   const [buttons, setButtons] = useState<JSX.Element[]>([]);

//   const createButton = () => {
//     const buttonName = window.prompt("Enter your new project name");
//     if (buttonName) {
//       const newButton = (
//         <div className="button-wrapper" key={buttonName}>
//           <button className="custom-button">{buttonName}</button>
//           <FaTrashAlt
//             className="delete-icon"
//             onClick={() => deleteButton(buttonName)}
//           />
//         </div>
//       );
//       setButtons((prevButtons) => [...prevButtons, newButton]);
//     }
//   };

//   const deleteButton = (buttonName: string) => {
//     setButtons((prevButtons) =>
//       prevButtons.filter((button) => button.key !== buttonName)
//     );
//   };

//   return (
//     <div className="button-creator">
//       <button className="add-button" onClick={createButton}>
//         <FaRegPlusSquare />
//       </button>
//       <div className="button-list">{buttons}</div>
//     </div>
//   );
// };

// export default ButtonCreator;

import useStyles from "./NewProjectCss";
import { FaRegPlusSquare, FaTrashAlt } from "react-icons/fa";
import React, { useState } from "react";
import { Button, Modal, Text } from "@mantine/core";

const ButtonCreator = () => {
  const { classes } = useStyles();
  const [buttons, setButtons] = useState<JSX.Element[]>([]);
  const [newButtonName, setNewButtonName] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

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
      const newButton = (
        <div className={classes.buttonWrapper} key={newButtonName}>
          <button className={classes.customButton}>{newButtonName}</button>
          <FaTrashAlt
            // className={classes.deleteIcon}
            onClick={() => deleteButton(newButtonName)}
          />
        </div>
      );
      setButtons((prevButtons) => [...prevButtons, newButton]);
      closeModal();
    }
  };

  const deleteButton = (buttonName: string) => {
    setButtons((prevButtons) =>
      prevButtons.filter((button) => button.key !== buttonName)
    );
  };

  return (
    <div className={classes.buttonCreator}>
      <button className={classes.addButton} onClick={openModal}>
        <FaRegPlusSquare />
      </button>
      <div className={classes.buttonList}>{buttons}</div>

      <Modal opened={modalOpen} onClose={closeModal} centered>
        <Modal.Header className={classes.alertTittle}>
          <Modal.Title>
            <h2>Enter your new project name:</h2>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            className={classes.alertInput}
            type="text"
            value={newButtonName}
            onChange={handleInputChange}
            style={{ width: "80%" }}
          />
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
  );
};

export default ButtonCreator;

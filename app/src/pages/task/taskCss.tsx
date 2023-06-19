import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  mainHeading: {
    backgroundColor: "#454545",
    color: "rgb(252, 252, 252)",
    padding: "1%",
    textAlign: "center",
  },
  todoSection: {
    display: "flex",
  },
  todoColumn: {
    flex: 1,
  },
  doneColumn: {
    flex: 1,
  },
  todoList: {
    listStyleType: "none",
    padding: 0,
  },
  todoItem: {
    marginBottom: "3%",
    listStyleType: "none",
  },
  todoLink: {
    textDecoration: "none",
    display: "inline-block",
    padding: "4% 4%",
    backgroundColor: "#006fff",
    color: "rgb(252, 252, 252)",
    borderRadius: "5px",
    
  },
  todoButton: {
    backgroundColor: "rgb(0, 0, 0)",
    color: "rgb(255, 255, 255)",
    padding: "10px 20px",
    border: "none",
    cursor: "pointer",
    borderRadius: "5px",
  },
  doneList: {
    listStyleType: "none",
    padding: 0,
  },
  doneItem: {
    marginBottom: "10px",
    listStyleType: "none",
  },
  doneTitle: {
    textDecoration: "none",
    display: "inline-block",
    padding: "5px 10px",
    backgroundColor: "#006fff",
    color: "rgb(252, 252, 252)",
    borderRadius: "5px",
  },

  addButton: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "rgb(255, 255, 255)",
    color: "rgb(255, 187, 73)",
    fontSize: "24px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
    marginTop: "20px",
  },
  addIcon: {
    marginRight: "5px",
    borderRadius: "5px",
    backgroundColor: "rgm (255, 255, 255)",
    color: "rgb(255, 187, 73)",
  },
}));
export default useStyles;

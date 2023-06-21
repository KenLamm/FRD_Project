import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  // bgColor: {
  //   backgroundColor: "#454545",

  // },
  mainHeading: {
    backgroundColor: "#454545",
    color: "rgb(252, 252, 252)",
    textAlign: "center",
    padding: "0",
    margin: "0",
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
    maxWidth:'150%',
  },
  todoItem: {
    marginBottom: "3%",
    listStyleType: "none",
    textAlign:'left'
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
    backgroundColor: "#454545",
    color: "rgb(255, 255, 255)",
    padding: "10px 20px",
    border: "none",
    cursor: "pointer",
    borderRadius: "5px",
    borderStyle: "solid",
    borderBottomColor: "rgb(255, 255, 255)",
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
    // alignItems: "center",
    padding: "10px",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "#454545",
    color: "#006fff",
    fontSize: "24px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
    marginTop: "20px",
    marginLeft: "80%",
  },
  addIcon: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[6] : "#f2f2f2",
    border: "none",
    borderRadius: "50%",
    padding: "10px",
    cursor: "pointer",
    display: "flex",
    // alignItems: "center",
    // justifyContent: "center",
    fontSize: "20px",
    marginTop: "10px",
    height: "auto",
  },
  alertTittle: {
    height: "20px",
  },
  alertInput: {
    marginTop: "3%",
    marginBottom: "3%",
    fontSize: "16px",
  },
  centerStyle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    textAlign: "center",
    position: "fixed",
    top: "50%",
    left: "50%",
  },
  buttonCreator: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));
export default useStyles;

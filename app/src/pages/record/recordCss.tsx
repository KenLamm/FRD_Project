import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  container: {
    display: "flex",
    textAlign: "center",
    flexDirection: "column",
    padding: "20px",
    borderRadius: "20px",
    height: "100%",
    backgroundColor: "#454545",
  },
  // workingFolderPage: {
  //     fontSize: '24px',
  //     marginBottom: '20px',
  // },
  folderList: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gridGap: "20px",
    maxWidth: "800px",
    marginBottom: "20px",
  },
  folderButton: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "5px",
    border: `3px solid rgb(69, 69, 69) `,
    borderRadius: "15px",
    textDecoration: "none",
    color: "rgb(255, 255, 255 )",
    backgroundColor: "#006fff",
    transition: "background-color 0.3s ease",
  },
  folderIcon: {
    fontSize: "29px",
    marginBottom: "5px",
    color: "rgb(255, 255, 255)",
  },
  addButton: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px",
    border: "none",
    borderRadius: "50%",
    color: "rgb(0, 0, 0, 0.5)",
    fontSize: "24px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
    marginLeft: "70%",
    paddingRight: "5px",
    marginBottom: "3%",
  },
  addIcon: {
    marginRight: "5px",
    borderRadius: "5px",
    backgroundColor: "rgm (255, 255, 255)",
    color: "rgb(0, 111, 255)",
  },
  addInput: {
    marginRight: "5px",
  },
  addButtonContainer: {
    backgroundColor: "rgb(255, 255, 255)",
  },
  title: {
    alignItems: "center",
    color: "#fff"!!!,
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

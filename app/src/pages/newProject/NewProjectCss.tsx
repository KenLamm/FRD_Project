import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  buttonCreator: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  addButton: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[6] : "#fff",
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
    marginLeft: "80%",
    color: "blue",
  },
  buttonList: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    fontSize: "1%",
    borderRadius: "30%",
  },
  customButton: {
    margin: "20px",
    padding: "20px",
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.blue : "#006bff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    textAlign: "center",
    width: "60%",
    height: "auto",
    fontSize: "18px",
    color: "white",
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
  tittle: {
    display: "flex",
    justifyContent: "center",
    fontSize: "5vh",
    color: "white",
    paddingTop: "3%",
  },
  bgColour: {
    backgroundColor: "#454545",
    paddingBottom: "30%",
  },
}));

export default useStyles;

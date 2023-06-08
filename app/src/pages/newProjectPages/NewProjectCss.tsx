import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  buttonCreator: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  addButton: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[6] : "#f2f2f2",
    border: "none",
    borderRadius: "50%",
    padding: "10px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "40px",
    marginTop: "10px",
  },
  buttonList: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    width: "60%",
    fontSize: "40px",
  },
  customButton: {
    margin: "10px",
    padding: "10px 20px",
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[6] : "#f2f2f2",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    textAlign: "center",
    width: "70%",
    height: "60px",
    fontSize: "40px",
  },
  buttonWrapper: {
    display: "flex",
    alignItems: "center",
    width: "100%",
  },
  alertTittle: {
    height: "20px",
  },
  alertInput: {
    marginTop: "3%",
    marginBottom: "3%",
  },
  centerStyle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
}));

export default useStyles;

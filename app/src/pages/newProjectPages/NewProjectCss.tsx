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
    fontSize: "120%",
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
    height: "60%",
    fontSize: "18px",
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
<<<<<<< HEAD
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "20px",
=======
    fontSize: "16px"
>>>>>>> 2750340aff7cfe9502c6ad875d1e28595fb14ddb
  },
  // centerStyle: {
  //   display: "flex",
  //   justifyContent: "center",
  //   alignItems: "center",
  //   height: "100vh",
  //   fontSize: "20px",
  // },
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
}));

export default useStyles;

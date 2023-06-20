import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  readingPage: {
    fontFamily: "Arial, sans-serif",
    padding: "20px",
    color: "#FFF",
  },
  title: {
    color: "#FFF",
    fontSize: "24px",
    marginBottom: "10px",
  },
  subtitle: {
    color: "#FFF",
    fontSize: "20px",
    marginTop: "20px",
    marginBottom: "10px",
  },
  list: {
    listStyleType: "square",
    paddingLeft: "20px",
  },
  listItem: {
    marginBottom: "5px",
  },
  header: {
    color: "#FFF",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export default useStyles;

import { createStyles } from "@mantine/core";
const useStyles = createStyles((theme) => ({
  mainHeading: {
    backgroundColor: "rgb(255, 187, 73)",
    color: "rgb(0, 0, 0)",
    padding: "1%",
    textAlign: "center",
  },
    card: {
      position: "relative",
      overflow: "visible",
      padding: theme.spacing.xl,
    },
  
    title: {
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,
      lineHeight: "120%",
      backgroundColor: "rgb(255, 187, 73)",
      color: "black",
      borderRadius: "15% ",
    },
    linktodo: {
      textDecoration: "none",
      display: "flex",
      justifyContent: "center",
    },
    tittleBar: {
      width: "28%",
      justifyContent: "center",
    },
  }));
  export default useStyles;
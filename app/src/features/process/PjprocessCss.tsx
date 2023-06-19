import { createStyles } from "@mantine/core";
const useStyles = createStyles((theme) => ({
  mainHeading: {
    color: "rgb(252, 252, 252)",
    textAlign: "center",
    fontSize:"40px"
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    lineHeight: "120%",
    backgroundColor: "#0085ff",
    // background: "linear-gradient(90deg, rgba(0,133,255,1) 0%, rgba(105,180,255,1) 100%)",

    color: "rgb(252, 252, 252)",
    borderRadius: "20px ",
    paddingTop: "5px",
    paddingBottom: "5px"
  },
  linktodo: {
    textDecoration: "none",
    display: "flex",
    justifyContent: "center",
  },
  tittleBar: {
    width: "30%",
    justifyContent: "center",
  },
}));
export default useStyles;

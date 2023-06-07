import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  photoContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gridGap: 20,
  },
  centerStyle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
  icon: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "60vw",
  },
  center: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
  circle: {
    width: 200,
    height: 200,
    borderRadius: "50%",
    objectFit: "cover",
  },
}));

export default useStyles;

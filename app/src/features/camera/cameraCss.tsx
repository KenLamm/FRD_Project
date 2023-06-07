import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  videoContainer: {
    position: "absolute",
    marginLeft: "10%",
    marginRight: "10%",
    marginTop: "10%",
    marginBottom: "10%",
    maxHeight: "fit-content",
    zIndex: -1,
    top: 0,
    right: 0,
    bottom: 0,
  },
  buttonArea: {
    position: "absolute",
    minWidth: "40%",
    minHeight: "10%",
    top: "80%",
    left: "10%",
    right: "10%",
    display: "flex",
    justifyContent: "space-between",
  },
}));

export default useStyles;

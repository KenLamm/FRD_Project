import { createStyles } from "@mantine/core";

const useStyles = createStyles({
  visibleVideo: {
    height: "100%",
  },
  videoContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "fixed",
    marginLeft: "10%",
    marginRight: "10%",
    marginTop: "10%",
    marginBottom: "10%",
    maxHeight: "fit-content",
    height: "100vh",
    width: "100vw",
    zIndex: -10,
    // zIndex: -10,
    top: "30%",
    left: "40%",
    bottom: "30%",
    transform: "translate(-50%, -50%)",
    // width:"200px",
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
  button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
    border: "none",
    cursor: "pointer",
    transition: "opacity 0.3s ease",
  },
  buttonIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 24,
    height: 24,
    color: "rgba(255, 255, 255, 0.8)",
    transition: "color 0.3s ease",
  },
  buttonText: {
    marginLeft: 8,
    color: "rgba(255, 255, 255, 0.8)",
    fontSize: 14,
    transition: "color 0.3s ease",
  },
  buttonHover: {
    "& $buttonIcon": {
      color: "rgba(255, 255, 255, 1)",
    },
    "& $buttonText": {
      color: "rgba(255, 255, 255, 1)",
    },
  },
  saveCancelArea: {
    position: "absolute",
    minWidth: "40%",
    minHeight: "10%",
    top: "80%",
    left: "10%",
    right: "10%",
    display: "flex",
    justifyContent: "space-between",
  },
});

export default useStyles;

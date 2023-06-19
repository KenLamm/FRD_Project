import { createStyles } from "@mantine/core";

const useStyles = createStyles({
  visibleVideo: {
    // position:'absolute',
    height: "100%",

  },
  videoContainer: {
    // position:"absolute",
    display: "flex",
    // position: "relative",
    // marginLeft: "10%",
    // marginRight: "10%",
    // marginTop: "10%",
    // marginBottom: "10%",
    // maxHeight: "fit-content",
    height: '100%',
    // width: "100vh",
    // left: "40%",
    // bottom: "30%",
    // transform: "translate(-50%, -50%)",
  },
  buttonArea: {
    position: "absolute",
    minWidth: "30%",
    minHeight: "10%",
    top: "80%",
    left: "5%",
    right:"15%",
    display: "flex",
    justifyContent: "space-evenly",
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
    right: "30%",
    display: "flex",
    justifyContent: "space-between",
  },
  sendButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 24,
    height: 24,
    color: "rgba(0, 0, 0, 0.8)",
    transition: "color 0.3s ease",
  },
  cancelButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 24,
    height: 24,
    color: "rgba(0, 0, 0, 0.8)",
    transition: "color 0.3s ease",
  },
  pictureName: {
    position: "absolute",
    left: "25%",
    minWidth: "40%",
    bottom: 0,
    zIndex: 9999
  }
});


export default useStyles;

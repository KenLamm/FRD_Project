import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  photoContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gridGap: 20,
  },
  photo: {
    border: `1px solid ${theme.colors.gray[5]}`,
    borderRadius: 5,
    padding: 10,
  },
  captureButton: {
    backgroundColor: theme.colors.red[6],
    color: theme.white,
    padding: "10px 20px",
    border: "none",
    borderRadius: 5,
    fontSize: 16,
    cursor: "pointer",
  },
  recordButton: {
    backgroundColor: theme.colors.blue[6],
    color: theme.white,
    padding: "10px 20px",
    border: "none",
    borderRadius: 5,
    fontSize: 16,
    cursor: "pointer",
  },
  // cameraOverlay: {
  //   position: "absolute",
  //   // width: "100vh",
  //   // backgroundColor: "rgba(0, 0, 0, 0.5)",
  //   zIndex: 9999,
  //   // display: "flex",
  //   // justifyContent: "center",
  //   // alignItems: "center",
  //   padding: 0,
  //   margin: 0,
  //   top: 0,
  //   left: 0,
  //   width:"100%",
  //   height:"100%"
  // },
  // cameraContainer: {
  //   width: "100%",
  //   maxWidth: 400,
  //   height: "auto",
  //   backgroundColor: theme.white,
  //   borderRadius: 8,
  //   padding: 16,
  //   position: "absolute",
  // },
}));

export default useStyles;






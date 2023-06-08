import { createStyles } from "@mantine/core"

const useStyles = createStyles((theme) => ({

      mainHeading: {
        backgroundColor: "rgb(255, 187, 73)",
        color: "rgb(0, 0, 0)",
        padding: "1%",
        textAlign: "center",
      },
      todoSection: {
        display: "flex",
      },
      todoColumn: {
        flex: 1,
      },
      doneColumn: {
        flex: 1,
      },
      todoList: {
        listStyleType: "none",
        padding: 0,
      },
      todoItem: {
        marginBottom: "3%",
        listStyleType: "none",
      },
      todoLink: {
        textDecoration: "none",
        display: "inline-block",
        padding: "2% 2%",
        backgroundColor: "rgb(255, 187, 73)",
        color: "black",
        borderRadius: "15%",
      },
      todoButton: {
        backgroundColor: "rgb(0, 0, 0)",
        color: "rgb(255, 255, 255)",
        padding: "10px 20px",
        border: "none",
        cursor: "pointer",
        borderRadius: "15px",
      },
      doneList: {
        listStyleType: "none",
        padding: 0,
      },
      doneItem: {
        marginBottom: "10px",
        listStyleType: "none",
      },
      doneTitle: {
        textDecoration: "none",
        display: "inline-block",
        padding: "5px 10px",
        backgroundColor: "rgb(255, 187, 73)",
        color: "black",
        borderRadius: "5px",
      },
    })
  );
export default useStyles
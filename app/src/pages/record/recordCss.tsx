import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({

  container: {
    display: 'flex',
    textAlign: 'center',
    flexDirection: 'column',
    padding: '40px',
    borderRadius: '20px',
    height: "10%",

  },
  // workingFolderPage: {
  //     fontSize: '24px',
  //     marginBottom: '20px',
  // },
  folderList: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gridGap: '20px',
    maxWidth: '800px',
    marginBottom: '20px',
  },
  folderButton: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '5px',
    border: `3px solid rgb(69, 69, 69) `,
    borderRadius: '15px',
    textDecoration: 'none',
    color: "rgb(255, 255, 255 )",
    backgroundColor: "#006fff",
    transition: 'background-color 0.3s ease',
  },
  folderIcon: {
    fontSize: '29px',
    marginBottom: '5px',
    color: "rgb(255, 255, 255)",
  },
  addButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10px',
    border: 'none',
    borderRadius: '15px',
    color: "rgb(0, 0, 0, 0.5)",
    fontSize: '24px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    marginTop: '20px',
  },
  addIcon: {
    marginRight: '5px',
    borderRadius: '5px',
    backgroundColor: "rgm (255, 255, 255)",
    color: "rgb(0, 111, 255)",
  },
  addInput: {
    marginRight: '5px',
  },
  addButtonContainer: {
    backgroundColor: "rgb(255, 255, 255)",
  },
  title: {
    alignItems: 'center',
    color: "#fff"!!!,
  }

}));

export default useStyles

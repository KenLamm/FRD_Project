import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  readingPage: {
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    color: '#333',
  },
  title: {
    color: 'blue',
    fontSize: '24px',
    marginBottom: '10px',
  },
  subtitle: {
    color: 'black',
    fontSize: '20px',
    marginTop: '20px',
    marginBottom: '10px',
  },
  list: {
    listStyleType: 'square',
    paddingLeft: '20px',
  },
  listItem: {
    marginBottom: '5px',
  },
}));

export default useStyles;

  
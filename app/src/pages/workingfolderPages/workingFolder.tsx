import React, { useState } from 'react';
import { FaFolder, FaPlus } from 'react-icons/fa';
import useStyles from './/workingFolderCss';
import { Link } from 'react-router-dom';

interface Folder {
  id: number;
  name: string;
  path: string;
}

const FolderPage: React.FC = () => {
  const { classes } = useStyles();
  const [folders, setFolders] = useState<Folder[]>([
    { id: 1, name: '岩石地基', path: '/path/to/folder1' },
    { id: 2, name: '降水工作', path: '/path/to/folder2' },
    { id: 3, name: '石縫走向', path: '/path/to/folder3' },
    { id: 4, name: '基石縫裂', path: '/path/to/folder4' },
  ]);
  const [newFolderName, setNewFolderName] = useState('');
  const [isAddingFolder, setIsAddingFolder] = useState(false);

  // const handleFolderClick = (path: string) => {
  //   // Perform any actions when a folder is clicked, such as navigating to the folder path
  // };

  const handleAddClick = () => {
    if (newFolderName.trim() !== '') {
      const newFolder: Folder = {
        id: folders.length + 1,
        name: newFolderName,
        path: `/path/to/${newFolderName}`,
      };

      setFolders([...folders, newFolder]);
      setNewFolderName('');
      setIsAddingFolder(false);
    }
  };

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>地基檢測</h1>
      {folders.map(folder => (
        <Link
          key={folder.id}
          to="/photodetail"
          className={classes.folderButton}
          // onClick={e => {
          //   e.preventDefault();
          //   handleFolderClick(folder.path);
          // }}
        >
          <FaFolder className={classes.folderIcon} /> {folder.name}
        </Link>
      ))}
      {isAddingFolder ? (
        <div className={classes.addButtonContainer}>
          <input
            type="text"
            className={classes.addInput}
            placeholder="Enter folder name"
            value={newFolderName}
            onChange={e => setNewFolderName(e.target.value)}
          />
          <button className={classes.addButton} onClick={handleAddClick}>
            <FaPlus className={classes.addIcon} />
          </button>
        </div>
      ) : (
        <button className={classes.addButton} onClick={() => setIsAddingFolder(true)}>
          <FaPlus className={classes.addIcon} /> 
        </button>
      )}
    </div>
  );
};

export default FolderPage;

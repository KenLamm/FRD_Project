import React, { useState } from 'react';
import { FaFolder, FaPlus } from 'react-icons/fa';
import './workingFolder.css';
import { Link } from 'react-router-dom';

interface Folder {
  id: number;
  name: string;
  path: string;
}

const FolderPage: React.FC = () => {
  const [folders, setFolders] = useState<Folder[]>([
    { id: 1, name: 'Folder 1', path: '/path/to/folder1' },
    { id: 2, name: 'Folder 2', path: '/path/to/folder2' },
    { id: 3, name: 'Folder 3', path: '/path/to/folder3' },
    { id: 4, name: 'Folder 4', path: '/path/to/folder4' },
  ]);
  const [newFolderName, setNewFolderName] = useState('');
  const [isAddingFolder, setIsAddingFolder] = useState(false);

  const handleFolderClick = (path: string) => {
    // Perform any actions when a folder is clicked, such as navigating to the folder path
  };

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
    <div className="container">
      <h1 className="title">Working Folder Page</h1>
      {folders.map(folder => (
        <Link
          key={folder.id}
          to="/photodetail"
          className="folder-button"
          // onClick={e => {
          //   e.preventDefault();
          //   handleFolderClick(folder.path);
          // }}
        >
          <FaFolder className="folder-icon" /> {folder.name}
        </Link>
      ))}
      {isAddingFolder ? (
        <div className="add-button-container">
          <input
            type="text"
            className="add-input"
            placeholder="Enter folder name"
            value={newFolderName}
            onChange={e => setNewFolderName(e.target.value)}
          />
          <button className="add-button" onClick={handleAddClick}>
            <FaPlus className="add-icon" />
          </button>
        </div>
      ) : (
        <button className="add-button" onClick={() => setIsAddingFolder(true)}>
          <FaPlus className="add-icon" /> Add
        </button>
      )}
    </div>
  );
};

export default FolderPage;

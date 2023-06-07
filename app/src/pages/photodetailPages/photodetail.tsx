import React, { useState } from 'react';
import { FaCamera, FaVideo } from 'react-icons/fa';
import Camera from '../../features/camera/camera';
import './photodetail.css';

const PhotoPage: React.FC = () => {
  const [showCamera, setShowCamera] = useState(false);

  const handleCapturePhoto = () => {
    setShowCamera(true);
  };

  const handleRecordVideo = () => {
    setShowCamera(true);
  };

  const handleCloseCamera = () => {
    setShowCamera(false);
  };

  return (
    <div>
      <h1>Photo Page</h1>
      <div className="button-container">
        <button className="capture-button" onClick={handleCapturePhoto}>
          <FaCamera />
        </button>
        <button className="record-button" onClick={handleRecordVideo}>
          <FaVideo />
        </button>
      </div>
      {showCamera && (
        <div className="camera-overlay">

            <Camera onClose={handleCloseCamera} />

        </div>
      )}

      
    </div>
  );
};

export default PhotoPage;

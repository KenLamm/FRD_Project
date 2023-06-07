import React, { useState } from "react";
import { FaCamera, FaVideo } from "react-icons/fa";
import Camera from "../../features/camera/camera";
import useStyles from "./photodetailCss";

const PhotoPage: React.FC = () => {
  const { classes } = useStyles();
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
      <div>
        <button className={classes.captureButton} onClick={handleCapturePhoto}>
          <FaCamera />
        </button>
        <button className={classes.recordButton} onClick={handleRecordVideo}>
          <FaVideo />
        </button>
      </div>
      {showCamera && (
        <div className={classes.cameraOverlay}>
          <Camera onClose={handleCloseCamera} />
        </div>
      )}
    </div>
  );
};

export default PhotoPage;

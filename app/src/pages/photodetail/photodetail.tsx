import React, { useState } from "react";
import { FaCamera, FaVideo } from "react-icons/fa";
import Camera from "../../features/camera/camera";
import { createStyles } from "@mantine/core";

import UserInfoIcons from "./UserInfoIcons"; // Check the file path and ensure it's correct
import { useParams } from "react-router";
import { usePhoto } from "./photodetailAPI";
import { useQueryClient } from "@tanstack/react-query";
import { relative } from "path";

const useStyles = createStyles((theme) => ({
  captureButton: {
    // Add your custom styles for the capture button
  },
  recordButton: {
    // Add your custom styles for the record button
  },
  cameraOverlay: {
    // Add your custom styles for the camera overlay
  },
  displayNone: {
    display: "none",
  },
}));

const Photo: React.FC = () => {
  const record = useParams()
  const { data: photos } = usePhoto(record.id ?? "");
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
    <div className="hi234" style={{ position: "relative" }}>
      <h1>Photo Page</h1>
      <div>
        <button className={classes.captureButton} onClick={handleCapturePhoto}>
          <FaCamera />
        </button>
        <button className={classes.recordButton} onClick={handleRecordVideo}>
          <FaVideo />
        </button>
      </div>
      {showCamera && (<Camera onClose={handleCloseCamera} />)}

      <div className={showCamera ? classes.displayNone : "isShow"}>
        <UserInfoIcons
          avatar="avatar.jpg"
          name="Sam Lee"
          title="Software Engineer"
        />
      </div>

    </div>
  );
};

export default Photo;

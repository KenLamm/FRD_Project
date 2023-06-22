import React, { useState } from "react";
import { FaCamera, FaPhp, FaVideo } from "react-icons/fa";
import Camera from "../../features/camera/camera";
import { createStyles } from "@mantine/core";
import UserInfoIcons from "./UserInfoIcons"; // Check the file path and ensure it's correct
import { useParams } from "react-router";
import { usePhoto, useRecordName } from "./photodetailAPI";
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
  const record = useParams();
  const { data: photos } = usePhoto(record.id ?? "");
  const { data: recordName } = useRecordName(record.id ?? "");
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
    <div
      className="hi234"
      style={{
        position: "relative",
        backgroundColor: "#454545",
        height: "100%",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          marginTop: 0,
          paddingTop: "0.67em",
        }}
      >
        {recordName && recordName[0].name}
      </h1>
      <div>
        <button className={classes.captureButton} onClick={handleCapturePhoto}>
          <FaCamera />
        </button>
      </div>
      {showCamera && <Camera onClose={handleCloseCamera} />}

      <div className={showCamera ? classes.displayNone : "isShow"}>
        {photos &&
          photos.map((photo) => (
            <UserInfoIcons
              avatar={`${process.env.REACT_APP_API_URL}/uploads/${photo.s3_name}`}
              name={`${photo.name}`}
              title={`${photo.description}`}           
                //  createdAt={`${photo.created_at}`}
              // updatedAt={''}
              // createdAt="2023-06-01"
              // updatedAt="2023-06-20"
            />
          ))}
      </div>
    </div>
  );
};

export default Photo;

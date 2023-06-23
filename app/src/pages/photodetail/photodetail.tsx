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
    backgroundColor: theme.colors.red[6],
    color: "#006fff",
    padding: "10px 20px",
    border: "none",
    borderRadius: 5,
    fontSize: 16,
    cursor: "pointer",
    paddingBottom: "50%",
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
  cameraOverlay: {
    // Add your custom styles for the camera overlay
  },
  displayNone: {
    display: "none",
    border: `1px solid ${theme.colors.gray[5]}`,
    borderRadius: 5,
    padding: "10%",
  },
  cameraBtn: {
    color: "#006fff",
  },
  cameraDiv: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-start",
    marginRight: "8%",
    paddingBottom: "3%",
    borderRadius: "50%",
    backgroundColor: "#454545",
  },
  isShow: {
    padding: "30%",
  },
}));

const formatDateTime = (dateTimeString: string): string => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };
  return new Date(dateTimeString).toLocaleString("en-US", options);
};

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
          color: "white",
          marginTop: 0,
          paddingTop: "0.67em",
        }}
      >
        {recordName && recordName[0].name}
      </h1>
      <div className={classes.cameraDiv} style={{ borderRadius: "50%" }}>
        <button onClick={handleCapturePhoto}>
          <FaCamera className={classes.cameraBtn} size={30} />
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
              time={formatDateTime(photo.created_at)}
            />
          ))}
      </div>
    </div>
  );
};

export default Photo;

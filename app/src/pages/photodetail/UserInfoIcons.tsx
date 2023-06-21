import React, { useState } from "react";
import { createStyles, Avatar, Text, Group } from "@mantine/core";
import { IconAt, IconPhoneCall } from "@tabler/icons-react";

const useStyles = createStyles((theme) => ({
  icon: {
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[3]
        : theme.colors.gray[5],
  },
  name: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },
  avatar: {
    cursor: "pointer",
  },
  lightboxContainer: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999,
  },
  lightboxImage: {
    maxWidth: "90%",
    maxHeight: "90%",
  },
}));

interface UserInfoIconsProps {
  avatar: string;
  name: string;
  title: string;
}

const UserInfoIcons: React.FC<UserInfoIconsProps> = ({
  avatar,
  name,
  title,
}) => {
  const { classes } = useStyles();
  const getTime = new Date().toLocaleTimeString(); // Get the current time
  const getDate = new Date().toLocaleDateString(); // Get the current date

  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const openLightbox = () => {
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  const playVideo = () => {
    setIsVideoPlaying(true);
  };

  const pauseVideo = () => {
    setIsVideoPlaying(false);
  };

  return (
    <div className="myAvatar">
      <Group noWrap>
        <Avatar
          src={avatar}
          size={150}
          radius="md"
          className={classes.avatar}
          onClick={openLightbox}
        />
        <div>
          <Text fz="xs" tt="uppercase" fw={700} c="#fff">
            {title}
          </Text>
          <Text fz="lg" c="#fff" fw={800} className={classes.name}>
            {name}
          </Text>
          <Group noWrap spacing={10} mt={3}>
            <IconAt stroke={1.5} size="1rem" className={classes.icon} />
            <Text fz="xs" c="#fff">
              {getDate}
            </Text>
          </Group>
          <Group noWrap spacing={10} mt={5}>
            <IconPhoneCall stroke={1.5} size="1rem" className={classes.icon} />
            <Text fz="xs" c="#fff">
              {getTime}
            </Text>
          </Group>
        </div>
      </Group>

      {isLightboxOpen && (
        <div className={classes.lightboxContainer} onClick={closeLightbox}>
          {isVideoPlaying ? (
            <video
              src={avatar}
              className={classes.lightboxImage}
              onClick={(e) => e.stopPropagation()}
              autoPlay
              controls
            />
          ) : (
            <img
              src={avatar}
              alt={name}
              className={classes.lightboxImage}
              onClick={(e) => e.stopPropagation()}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default UserInfoIcons;

// import React from 'react';
// import { createStyles, Avatar, Text, Group } from '@mantine/core';
// import { IconPhoneCall, IconAt } from '@tabler/icons-react';

// const useStyles = createStyles((theme) => ({
//   icon: {
//     color: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[5],

//   },
//   name: {
//     fontFamily: `Greycliff CF, ${theme.fontFamily}`,

//   },

// }));

// interface UserInfoIconsProps {
//   avatar: string;
//   name: string;
//   title: string;
// }

// const UserInfoIcons: React.FC<UserInfoIconsProps> = ({ avatar, name, title }) => {
//   const { classes } = useStyles();
//   const phone = new Date().toLocaleTimeString(); // Get the current time
//   const email = new Date().toLocaleDateString(); // Get the current date

//   return (
//     <div className='myAvator'>
//       <Group noWrap>
//         <Avatar src={avatar} size={94} radius="md" />
//         <div>
//           <Text fz="xs" tt="uppercase" fw={700} c="dimmed">
//             {title}
//           </Text>
//           <Text fz="lg" fw={500} className={classes.name}>
//             {name}
//           </Text>
//           <Group noWrap spacing={10} mt={3}>
//             <IconAt stroke={1.5} size="1rem" className={classes.icon} />
//             <Text fz="xs" c="dimmed">
//               {email}
//             </Text>
//           </Group>
//           <Group noWrap spacing={10} mt={5}>
//             <IconPhoneCall stroke={1.5} size="1rem" className={classes.icon} />
//             <Text fz="xs" c="dimmed">
//               {phone}
//             </Text>
//           </Group>
//         </div>
//       </Group>

//     </div>
//   );
// };

// export default UserInfoIcons;

//     t2

// import React from 'react';
// import { createStyles, Avatar, Text, Group, getStylesRef, rem, Card, Button } from '@mantine/core';
// import { IconPhoneCall, IconAt, IconStar } from '@tabler/icons-react';
// import { Carousel } from '@mantine/carousel';

// const useStyles = createStyles((theme) => ({
//   icon: {
//     color: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[5],
//   },
//   name: {
//     fontFamily: `Greycliff CF, ${theme.fontFamily}`,
//   },
//   price: {
//     color: theme.colorScheme === 'dark' ? theme.white : theme.black,
//   },
//   carousel: {
//     '&:hover': {
//       [`& .${getStylesRef('carouselControls')}`]: {
//         opacity: 1,
//       },
//     },
//   },
//   carouselControls: {
//     ref: getStylesRef('carouselControls'),
//     transition: 'opacity 150ms ease',
//     opacity: 0,
//   },
//   carouselIndicator: {
//     width: rem(4),
//     height: rem(4),
//     transition: 'width 250ms ease',
//     '&[data-active]': {
//       width: rem(16),
//     },
//   },
// }));

// interface UserInfoIconsProps {
//   avatar: string;
//   name: string;
//   title: string;
// }

// const images = [
//   'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
//   'https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
//   'https://images.unsplash.com/photo-1605774337664-7a846e9cdf17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
//   'https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
//   'https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
// ];

// const UserInfoIcons: React.FC<UserInfoIconsProps> = ({ avatar, name, title }) => {
//   const { classes } = useStyles();
//   const phone = new Date().toLocaleTimeString(); // Get the current time
//   const email = new Date().toLocaleDateString(); // Get the current date

//     const slides = images.map((image) => (
//       <Carousel.Slide key={image}>
//         <img src={image} alt="Slide" height={220} />
//       </Carousel.Slide>
//     ));

//   return (
//     <div className='myAvator'>
//       <Group noWrap>
//         <Avatar src={avatar} size={94} radius="md" />
//         <div>
//           <Text fz="xs" tt="uppercase" fw={700} c="dimmed">
//             {title}
//           </Text>
//           <Text fz="lg" fw={500} className={classes.name}>
//             {name}
//           </Text>
//           <Group noWrap spacing={10} mt={3}>
//             <IconAt stroke={1.5} size="1rem" className={classes.icon} />
//             <Text fz="xs" c="dimmed">
//               {email}
//             </Text>
//           </Group>
//           <Group noWrap spacing={10} mt={5}>
//             <IconPhoneCall stroke={1.5} size="1rem" className={classes.icon} />
//             <Text fz="xs" c="dimmed">
//               {phone}
//             </Text>
//           </Group>
//         </div>
//       </Group>

//       <Card radius="md" withBorder padding="xl">
//         <Card.Section>
//           <Carousel
//             withIndicators
//             loop
//             classNames={{
//               root: classes.carousel,
//               controls: classes.carouselControls,
//               indicator: classes.carouselIndicator,
//             }}
//           >
//             {slides}
//           </Carousel>
//         </Card.Section>

//       </Card>
//     </div>
//   );
// };

// export default UserInfoIcons;

//////////3
// import React from "react";
// import { createStyles, Avatar, Text, Group } from "@mantine/core";
// import { IconPhoneCall, IconAt } from "@tabler/icons-react";

// const useStyles = createStyles((theme) => ({
//   icon: {
//     color:
//       theme.colorScheme === "dark"
//         ? theme.colors.dark[3]
//         : theme.colors.gray[5],
//   },
//   name: {
//     fontFamily: `Greycliff CF, ${theme.fontFamily}`,
//   },
// }));

// interface UserInfoIconsProps {
//   avatar: string;
//   name: string;
//   title: string;
// }

// const UserInfoIcons: React.FC<UserInfoIconsProps> = ({
//   avatar,
//   name,
//   title,
// }) => {
//   const { classes } = useStyles();
//   const phone = new Date().toLocaleTimeString(); // Get the current time
//   const email = new Date().toLocaleDateString(); // Get the current date

//   return (
//     <div className="myAvator">
//       <Group noWrap>
//         <Avatar
//           src="https://images.unsplash.com/photo-1598928506311-c55ded91a20c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80"
//           size={94}
//           radius="md"
//         />
//         <div>
//           <Text fz="xs" tt="uppercase" fw={700} c="dimmed">
//             {title}
//           </Text>
//           <Text fz="lg" fw={500} className={classes.name}>
//             {name}
//           </Text>
//           <Group noWrap spacing={10} mt={3}>
//             <IconAt stroke={1.5} size="1rem" className={classes.icon} />
//             <Text fz="xs" c="dimmed">
//               {email}
//             </Text>
//           </Group>
//           <Group noWrap spacing={10} mt={5}>
//             <IconPhoneCall stroke={1.5} size="1rem" className={classes.icon} />
//             <Text fz="xs" c="dimmed">
//               {phone}
//             </Text>
//           </Group>
//         </div>
//       </Group>

//       <Group noWrap>
//         <Avatar
//           src="https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80"
//           size={94}
//           radius="md"
//         />
//         <div>
//           <Text fz="xs" tt="uppercase" fw={700} c="dimmed">
//             {title}
//           </Text>
//           <Text fz="lg" fw={500} className={classes.name}>
//             {name}
//           </Text>
//           <Group noWrap spacing={10} mt={3}>
//             <IconAt stroke={1.5} size="1rem" className={classes.icon} />
//             <Text fz="xs" c="dimmed">
//               {email}
//             </Text>
//           </Group>
//           <Group noWrap spacing={10} mt={5}>
//             <IconPhoneCall stroke={1.5} size="1rem" className={classes.icon} />
//             <Text fz="xs" c="dimmed">
//               {phone}
//             </Text>
//           </Group>
//         </div>
//       </Group>

//       <Group noWrap>
//         <Avatar
//           src="https://images.unsplash.com/photo-1605774337664-7a846e9cdf17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80"
//           size={94}
//           radius="md"
//         />
//         <div>
//           <Text fz="xs" tt="uppercase" fw={700} c="dimmed">
//             {title}
//           </Text>
//           <Text fz="lg" fw={500} className={classes.name}>
//             {name}
//           </Text>
//           <Group noWrap spacing={10} mt={3}>
//             <IconAt stroke={1.5} size="1rem" className={classes.icon} />
//             <Text fz="xs" c="dimmed">
//               {email}
//             </Text>
//           </Group>
//           <Group noWrap spacing={10} mt={5}>
//             <IconPhoneCall stroke={1.5} size="1rem" className={classes.icon} />
//             <Text fz="xs" c="dimmed">
//               {phone}
//             </Text>
//           </Group>
//         </div>
//       </Group>

//       <Group noWrap>
//         <Avatar
//           src="https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80'"
//           size={94}
//           radius="md"
//         />
//         <div>
//           <Text fz="xs" tt="uppercase" fw={700} c="dimmed">
//             {title}
//           </Text>
//           <Text fz="lg" fw={500} className={classes.name}>
//             {name}
//           </Text>
//           <Group noWrap spacing={10} mt={3}>
//             <IconAt stroke={1.5} size="1rem" className={classes.icon} />
//             <Text fz="xs" c="dimmed">
//               {email}
//             </Text>
//           </Group>
//           <Group noWrap spacing={10} mt={5}>
//             <IconPhoneCall stroke={1.5} size="1rem" className={classes.icon} />
//             <Text fz="xs" c="dimmed">
//               {phone}
//             </Text>
//           </Group>
//         </div>
//       </Group>

//       <Group noWrap>
//         <Avatar
//           src="https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80'"
//           size={94}
//           radius="md"
//         />
//         <div>
//           <Text fz="xs" tt="uppercase" fw={700} c="dimmed">
//             {title}
//           </Text>
//           <Text fz="lg" fw={500} className={classes.name}>
//             {name}
//           </Text>
//           <Group noWrap spacing={10} mt={3}>
//             <IconAt stroke={1.5} size="1rem" className={classes.icon} />
//             <Text fz="xs" c="dimmed">
//               {email}
//             </Text>
//           </Group>
//           <Group noWrap spacing={10} mt={5}>
//             <IconPhoneCall stroke={1.5} size="1rem" className={classes.icon} />
//             <Text fz="xs" c="dimmed">
//               {phone}
//             </Text>
//           </Group>
//         </div>
//       </Group>
//     </div>
//   );
// };

// export default UserInfoIcons;

// 4
// import React, { useState } from "react";
// import { createStyles, Avatar, Text, Group } from "@mantine/core";
// import { IconAt, IconPhoneCall } from "@tabler/icons-react";

// const useStyles = createStyles((theme) => ({
//   icon: {
//     color:
//       theme.colorScheme === "dark"
//         ? theme.colors.dark[3]
//         : theme.colors.gray[5],
//   },
//   name: {
//     fontFamily: `Greycliff CF, ${theme.fontFamily}`,
//   },
//   avatar: {
//     cursor: "pointer",
//   },
//   lightboxContainer: {
//     position: "fixed",
//     top: 0,
//     left: 0,
//     width: "100%",
//     height: "100%",
//     backgroundColor: "rgba(0, 0, 0, 0.7)",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     zIndex: 9999,
//   },
//   lightboxImage: {
//     maxWidth: "90%",
//     maxHeight: "90%",
//   },
// }));

// interface UserInfoIconsProps {
//   avatar: string;
//   name: string;
//   title: string;
// }

// const UserInfoIcons: React.FC<UserInfoIconsProps> = ({
//   avatar,
//   name,
//   title,
// }) => {
//   const { classes } = useStyles();
//   const phone = new Date().toLocaleTimeString(); // Get the current time
//   const email = new Date().toLocaleDateString(); // Get the current date

//   const [isLightboxOpen, setIsLightboxOpen] = useState(false);

//   const openLightbox = () => {
//     setIsLightboxOpen(true);
//   };

//   const closeLightbox = () => {
//     setIsLightboxOpen(false);
//   };

  

//   return (
//     <div className="myAvatar">
//       <Group noWrap>
//         <Avatar
//           src="https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80'"
//           size={120}
//           radius="md"
//           className={classes.avatar}
//           onClick={openLightbox}
//         />
//         <div>
//           <Text fz="xs" tt="uppercase" fw={700} c="#fff">
//             {title}
//           </Text>
//           <Text fz="lg" c="#fff" fw={800} className={classes.name}>
//             {name}
//           </Text>
//           <Group noWrap spacing={10} mt={3}>
//             <IconAt stroke={1.5} size="1rem" className={classes.icon} />
//             <Text fz="xs" c="#fff">
//               {email}
//             </Text>
//           </Group>
//           <Group noWrap spacing={10} mt={5}>
//             <IconPhoneCall stroke={1.5} size="1rem" className={classes.icon} />
//             <Text fz="xs" c="#fff">
//               {phone}
//             </Text>
//           </Group>
//         </div>
//       </Group>

//       {isLightboxOpen && (
//         <div className={classes.lightboxContainer} onClick={closeLightbox}>
//           <img
//             src="https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80'"
//             alt={name}
//             className={classes.lightboxImage}
//             onClick={(e) => e.stopPropagation()}
//           />
//         </div>
//       )}

//     </div>
//   );
// };

// export default UserInfoIcons;


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
  const phone = new Date().toLocaleTimeString(); // Get the current time
  const email = new Date().toLocaleDateString(); // Get the current date

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
          src="https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80'"
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
              {email}
            </Text>
          </Group>
          <Group noWrap spacing={10} mt={5}>
            <IconPhoneCall stroke={1.5} size="1rem" className={classes.icon} />
            <Text fz="xs" c="#fff">
              {phone}
            </Text>
          </Group>
        </div>
      </Group>

      {isLightboxOpen && (
        
        <div className={classes.lightboxContainer} onClick={closeLightbox}>
          {isVideoPlaying ? (
            <video
              src="path/to/video.mp4"
              className={classes.lightboxImage}
              onClick={(e) => e.stopPropagation()}
              autoPlay
              controls
            />
          ) : (
            <img
              src={"https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80'"
            }
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

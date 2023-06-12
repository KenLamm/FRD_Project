import React from 'react';
import { createStyles, Avatar, Text, Group } from '@mantine/core';
import { IconPhoneCall, IconAt } from '@tabler/icons-react';

const useStyles = createStyles((theme) => ({
  icon: {
    color: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[5],
  
  },
  name: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    
  },

}));

interface UserInfoIconsProps {
  avatar: string;
  name: string;
  title: string;
}

const UserInfoIcons: React.FC<UserInfoIconsProps> = ({ avatar, name, title }) => {
  const { classes } = useStyles();
  const phone = new Date().toLocaleTimeString(); // Get the current time
  const email = new Date().toLocaleDateString(); // Get the current date

  return (
    <div className='myAvator'>
      <Group noWrap>
        <Avatar src={avatar} size={94} radius="md" />
        <div>
          <Text fz="xs" tt="uppercase" fw={700} c="dimmed">
            {title}
          </Text>
          <Text fz="lg" fw={500} className={classes.name}>
            {name}
          </Text>
          <Group noWrap spacing={10} mt={3}>
            <IconAt stroke={1.5} size="1rem" className={classes.icon} />
            <Text fz="xs" c="dimmed">
              {email}
            </Text>
          </Group>
          <Group noWrap spacing={10} mt={5}>
            <IconPhoneCall stroke={1.5} size="1rem" className={classes.icon} />
            <Text fz="xs" c="dimmed">
              {phone}
            </Text>
          </Group>
        </div>
      </Group>
    </div>
  );
};

export default UserInfoIcons;

import {
  createStyles,
  ThemeIcon,
  Progress,
  Text,
  Group,
  Badge,
  Paper,
  rem,
} from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";
import { Link } from "react-router-dom";

const useStyles = createStyles((theme) => ({
  card: {
    position: "relative",
    overflow: "visible",
    padding: theme.spacing.xl,
    
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    lineHeight: "100%",
    backgroundColor: "rgb(255, 187, 73)",
    color: "black",
     
  },
  linktodo:{
    textDecoration: "none", 
    display: "flex",
    justifyContent: "center",
    
    

   
  },
  tittleBar:{
    width: "28%",
   
    justifyContent: "center",
   

  }
}));

export function StatsCard() {
  const { classes } = useStyles();
  const viewport = useViewportSize();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: viewport.height,
        

      }}
    >
      <Paper
        style={{
          width: "80%",
          maxWidth: "1200px",
          margin: "auto",
          
        }}
      >
        <Link to="/Todo" className={classes.linktodo}>
          <div className={classes.tittleBar}>
          <Text ta="center" fw={700} className={classes.title}>
            地基工程
          </Text>
          </div>
        </Link>
        <Group position="apart" mt="xs">
          <Text fz="sm" color="dimmed">
            進度
          </Text>
          <Text fz="sm" color="dimmed">
            62%
          </Text>
        </Group>
        <Progress value={32} mt={5} color="rgb(255, 187, 73)" />

        <Group position="apart" mt="md">
          <Badge size="sm">4 days left</Badge>
        </Group>

        <Link to="/Todo" className={classes.linktodo}>
          <div className={classes.tittleBar}>
          <Text ta="center" fw={700} className={classes.title}>
           主體結構
          </Text>
          </div>
        </Link>
        <Group position="apart" mt="xs">
          <Text fz="sm" color="dimmed">
            進度
          </Text>
          <Text fz="sm" color="dimmed">
            62%
          </Text>
        </Group>
        <Progress value={32} mt={5} color="rgb(255, 187, 73)" />

        <Group position="apart" mt="md">
          <Badge size="sm">4 days left</Badge>
        </Group>

        <Link to="/Todo" className={classes.linktodo}>
          <div className={classes.tittleBar}>
          <Text ta="center" fw={700} className={classes.title}>
           建築安裝
          </Text>
          </div>
        </Link>
        <Group position="apart" mt="xs">
          <Text fz="sm" color="dimmed">
            進度
          </Text>
          <Text fz="sm" color="dimmed">
            62%
          </Text>
        </Group>
        <Progress value={32} mt={5} color="rgb(255, 187, 73)" />

        <Group position="apart" mt="md">
          <Badge size="sm">4 days left</Badge>
        </Group>

        <Link to="/Todo" className={classes.linktodo}>
          <div className={classes.tittleBar}>
          <Text ta="center" fw={700} className={classes.title}>
          內部裝修
          </Text>
          </div>
        </Link>
        <Group position="apart" mt="xs">
          <Text fz="sm" color="dimmed">
            進度
          </Text>
          <Text fz="sm" color="dimmed">
            62%
          </Text>
        </Group>
        <Progress value={32} mt={5} color="rgb(255, 187, 73)" />

        <Group position="apart" mt="md">
          <Badge size="sm">4 days left</Badge>
        </Group>
      </Paper>
    </div>
  );
}

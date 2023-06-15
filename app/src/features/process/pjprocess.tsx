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
import { useProcess } from "./PjprocessAPI";
import useStyles from "./PjprocessCss";

interface Process {
  id: number,
  name: string
}

export function StatsCard() {
  const { classes } = useStyles();
  const viewport = useViewportSize();
  const process = useProcess();
  let data: Process[] |[] = []


  if (!process.isLoading){
     data = process.data
  }

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
      {data && data.map((item) => {
        return(
          <div>
        <Link to="/Todo" className={classes.linktodo}>
          <div className={classes.tittleBar}>
            <Text ta="center" fw={700} className={classes.title}>
            
          <div key={item.id}>{item.name}</div> 
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
        </div>
      )})}
      </Paper>
    </div>
  );
}


{/* <Link to="/Todo" className={classes.linktodo}>
          <div className={classes.tittleBar}>
            <Text ta="center" fw={700} className={classes.title}>
            {data && data.map((item) => (
          <li key={item.id}>{item.name}</li>))}
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
} */}

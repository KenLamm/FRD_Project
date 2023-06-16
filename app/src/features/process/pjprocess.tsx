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
import { Link, useParams } from "react-router-dom";
import { useProcess } from "./PjprocessAPI";
import useStyles from "./PjprocessCss";


export function StatsCard() {
  const projectId = useParams();
  console.log("project id", projectId);
  const { classes } = useStyles();
  const viewport = useViewportSize();
  const process = useProcess();

  console.log("meigig", process.data);

 
    const calculatePercentage = (inc: number, tt: number): number => {
      if (tt === 0) {
        return 0;
      }
      return Math.floor((1 -(inc / tt)) * 100);
    };
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
        {process.data &&
          process.data.map((item) => {
            return (
              // <div>
              //   <div>{item.id}</div>
              //   <div>{item.name}</div>
              //    <div>{item.inc}</div>
              //   <div>{item.tt}</div>
              //   <div>{item.percent}</div> 
            
              <div>
                <Link to={`/task/${item.id}`} className={classes.linktodo}>
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
                  {calculatePercentage(item.inc, item.tt)}%
                  </Text>
                </Group>
                <Progress value={calculatePercentage(item.inc, item.tt)} mt={5} color="rgb(255, 187, 73)" />

                <Group position="apart" mt="md">
                  <Badge size="sm">4 days left</Badge>
                </Group>
              </div>
            );
          })}
      </Paper>
    </div>
  );
}
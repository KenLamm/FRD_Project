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

  const { classes } = useStyles();
  const viewport = useViewportSize();
  const process = useProcess(projectId.id!);

  const calculatePercentage = (inc: number, tt: number): number => {
    if (tt === 0) {
      return 0;
    }
    return Math.floor((1 - inc / tt) * 100);
  };
  return (
    <>
      <Paper
        style={{
          backgroundColor: "#454545",
          width: "80%",
          maxWidth: "100%",
          margin: "auto",
          height: viewport.height,
        }}
      >
        {/* <h1>
          {process.data == undefined || process.data.length == 0
            ? "No task"
            : "Have Task"}
        </h1> */}
        {process.data && (
          <div className={classes.mainHeading}>
            {process.data[0].project_name}
          </div>
        )}

        {process.data &&
          process.data.map((item) => {
            return (
              <div>
                <div className={classes.categoryList}>
                  <Link
                    to={`/task/${projectId.id}/${item.id}`}
                    className={classes.linktodo}
                  >
                    <div className={classes.tittleBar}>
                      <Text ta="center" fw={700} className={classes.title}>
                        <div key={item.id}>{item.name}</div>
                      </Text>
                    </div>
                  </Link>
                  <Group position="apart" mt="xs">
                    <Text fz="sm" color="#FFFFFF">
                      進度
                    </Text>
                    <Text fz="sm" color="#FFFFFF">
                      {calculatePercentage(item.inc, item.tt)}%
                    </Text>
                  </Group>
                  <Progress
                    value={calculatePercentage(item.inc, item.tt)}
                    mt={5}
                    color="#006fff"
                  />

                  <Group position="apart" mt="md">
                    <Badge size="sm">6 days left</Badge>
                  </Group>
                </div>
              </div>
            );
          })}
      </Paper>
    </>
  );
}

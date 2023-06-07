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
    lineHeight: 1,
  },
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
        <Link to="/Todo">
          <Text ta="center" fw={700} className={classes.title}>
            地基工程
          </Text>
        </Link>
        <Group position="apart" mt="xs">
          <Text fz="sm" color="dimmed">
            Progress
          </Text>
          <Text fz="sm" color="dimmed">
            62%
          </Text>
        </Group>

        <Progress value={62} mt={5} />

        <Group position="apart" mt="md">
          <Badge size="sm">4 days left</Badge>
        </Group>

        <Text ta="center" fw={700} className={classes.title}>
          主體結構
        </Text>

        <Group position="apart" mt="xs">
          <Text fz="sm" color="dimmed">
            Progress
          </Text>
          <Text fz="sm" color="dimmed">
            62%
          </Text>
        </Group>

        <Progress value={62} mt={5} />

        <Group position="apart" mt="md">
          <Badge size="sm">4 days left</Badge>
        </Group>

        <Text ta="center" fw={700} className={classes.title}>
          建築安裝
        </Text>

        <Group position="apart" mt="xs">
          <Text fz="sm" color="dimmed">
            Progress
          </Text>
          <Text fz="sm" color="dimmed">
            62%
          </Text>
        </Group>

        <Progress value={62} mt={5} />

        <Group position="apart" mt="md">
          <Badge size="sm">4 days left</Badge>
        </Group>

        <Text ta="center" fw={700} className={classes.title}>
          內部裝修
        </Text>

        <Group position="apart" mt="xs">
          <Text fz="sm" color="dimmed">
            Progress
          </Text>
          <Text fz="sm" color="dimmed">
            62%
          </Text>
        </Group>

        <Progress value={62} mt={5} />

        <Group position="apart" mt="md">
          <Badge size="sm">4 days left</Badge>
        </Group>
      </Paper>
    </div>
  );
}

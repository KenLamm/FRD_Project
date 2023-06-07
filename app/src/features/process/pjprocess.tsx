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

  return (
    <div>
      <Paper>
        <Text ta="center" fw={700} className={classes.title}>
          地基工程
        </Text>
        <Text c="dimmed" ta="center" fz="sm">
          32 km / week
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
          <Text fz="sm">20 / 36 km</Text>
          <Badge size="sm">4 days left</Badge>
        </Group>

        <Text ta="center" fw={700} className={classes.title}>
          主體結構
        </Text>
        <Text c="dimmed" ta="center" fz="sm">
          32 km / week
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
          <Text fz="sm">20 / 36 km</Text>
          <Badge size="sm">4 days left</Badge>
        </Group>

        <Text ta="center" fw={700} className={classes.title}>
          建築安裝
        </Text>
        <Text c="dimmed" ta="center" fz="sm">
          32 km / week
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
          <Text fz="sm">20 / 36 km</Text>
          <Badge size="sm">4 days left</Badge>
        </Group>

        <Text ta="center" fw={700} className={classes.title}>
          內部裝修
        </Text>
        <Text c="dimmed" ta="center" fz="sm">
          32 km / week
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
          <Text fz="sm">20 / 36 km</Text>
          <Badge size="sm">4 days left</Badge>
        </Group>
      </Paper>
    </div>
  );
}

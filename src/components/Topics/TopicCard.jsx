import { Card, Text, Group, Badge } from "@mantine/core";
import { NavLink } from "react-router-dom";

const TopicCard = ({ topic }) => {
  const topicTitle = topic.slug[0] + topic.slug.slice(1);
  return (
    <Card
      align="center"
      ta="center"
      withBorder
      shadow="md"
      padding="sm"
      h="100%"
      miw={330}
      mb="md"
      component={NavLink}
      to={`/topics/${topic.slug}`}
      className="article-card"
    >
      <Group grow>
        <Text fw={700} ta="center" size="xl" tt="capitalize">
          {topicTitle}
        </Text>
      </Group>

      <Group justify="space-between" align-item="center">
        <Text mt="xs" c="dimmed" size="sm">
          {topic.description}
        </Text>
      </Group>
    </Card>
  );
};

export default TopicCard;

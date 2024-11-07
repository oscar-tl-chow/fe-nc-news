import { Card, Text, Group, Badge, Space } from "@mantine/core";

const CommentCard = ({ comment }) => {
  return (
    <Card withBorder shadow="sm" padding="lg" h="100%">
      <Text ta="left" c="white">
        {" "}
        {comment.body}
      </Text>
      <Space h="xl" />
      <Group justify="space-between" component="section">
        <Badge size="lg">{comment.votes}</Badge>
        <Badge
          tt="lowercase"
          mt="xs"
          color="green"
          size="md"
          fs="italic"
          variant="dot"
        >
          {comment.author}
        </Badge>
      </Group>
    </Card>
  );
};

export default CommentCard;

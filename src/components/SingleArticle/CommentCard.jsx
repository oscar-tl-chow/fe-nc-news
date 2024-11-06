import { Card, Text, Group, Badge } from "@mantine/core";

const CommentCard = ({ comment }) => {
  return (
    <Card withBorder shadow="sm" padding="lg" h="100%">
      <Text ta="left"> {comment.body}</Text>

      <Group justify="space-between" component="section">
        <Badge size="lg">{comment.votes}</Badge>
        <Badge tt="lowercase" mt="xs" color="black" size="md" fs="italic">
          {comment.author}
        </Badge>
      </Group>
    </Card>
  );
};

export default CommentCard;

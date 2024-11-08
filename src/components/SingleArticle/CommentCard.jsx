import { Card, Text, Group, Badge, Space, Button, rem } from "@mantine/core";
import { useContext, useState } from "react";
import { deleteComment } from "../../api";
import { notifications } from "@mantine/notifications";
import { UserContext } from "../UserContext/User";
import { IconCheck, IconX } from "@tabler/icons-react";

const CommentCard = ({ comment, refreshComments }) => {
  const { user } = useContext(UserContext);

  const [loading, setLoading] = useState(false);

  const xIcon = <IconX style={{ width: rem(20), height: rem(20) }} />;
  const checkIcon = <IconCheck style={{ width: rem(20), height: rem(20) }} />;

  const handleDelete = () => {
    setLoading(true);

    deleteComment(comment.comment_id)
      .then(() => {
        setLoading(false);
        notifications.show({
          icon: checkIcon,
          title: "Success!",
          message: "Comment deleted.",
          color: "green",
        });
        refreshComments();
      })
      .catch((err) => {
        notifications.show({
          icon: xIcon,
          title: "Error!",
          message: `Oh no! An error has occurred: ${err}`,
          color: "red",
        });
      });
  };

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
      <Group justify="flex-end">
        <Badge ta="center" variant="subtle">
          {user === comment.author ? (
            <Button
              onClick={handleDelete}
              variant="subtle"
              size="compact-xs"
              loading={loading}
            >
              Delete Comment
            </Button>
          ) : null}
        </Badge>
      </Group>
    </Card>
  );
};

export default CommentCard;

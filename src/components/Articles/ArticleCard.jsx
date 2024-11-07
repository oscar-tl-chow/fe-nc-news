import { Card, Text, Group, Badge, Image } from "@mantine/core";
import { NavLink } from "react-router-dom";

const ArticleCard = ({ article }) => {
  return (
    <Card
      withBorder
      shadow="xs"
      padding="md"
      h="100%"
      component={NavLink}
      to={`/article/${article.article_id}`}
      className="article-card"
    >
      <Card.Section>
        <Image
          src={article.article_img_url}
          height={160}
          alt={article.title}
          radius="xl"
        />
      </Card.Section>
      <Group mt="md">
        <Text ta="left" fw={500} size="lg">
          {article.title}
        </Text>
      </Group>
      <Group mt="md" justify="flex-start" align="center">
        <Badge>{article.topic}</Badge>
        <Badge size="sm" justify="flex-end" color="blue" variant="filled">
          🗨 {article.comment_count || 0} Comments
        </Badge>
      </Group>

      <Group justify="space-between">
        <Text
          mt="xs"
          c="white"
          size="sm"
          justify="flex-start"
          align="flex-end"
          wrap="wrap"
          direction="row"
        >
          by {article.author}
        </Text>
        <Badge size="md" justify="flex-end" color="red" variant="outline">
          <Text>{article.votes}</Text>
        </Badge>
      </Group>
    </Card>
  );
};

export default ArticleCard;

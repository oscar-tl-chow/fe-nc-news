import { Card, Text, Group, Badge, Image } from "@mantine/core";
import { NavLink } from "react-router-dom";

const ArticleCard = ({ article }) => {
  if (!article?.article_id) {
    return <h2>💀 Article not found 💀</h2>;
  }
  return (
    <Card
      withBorder
      shadow="m"
      padding="md"
      radius="md"
      h="100%"
      component={NavLink}
      to={`/article/${article.article_id}`}
    >
      <Card.Section>
        <Image
          src={article.article_img_url}
          height={160}
          alt={article.title || "Article Image"}
        />
      </Card.Section>

      <Group mt="md" mb="s">
        <Text fw={500} size="lg">
          {article.title || "Untitled Article"}
        </Text>
        <Badge>{article.topic || "No Topic"}</Badge>
      </Group>

      <Group position="apart">
        <Text c="dimmed" size="sm">
          {article.author || "Unknown Author"}
        </Text>
        <Text>{article.votes ?? 0} Votes</Text>
      </Group>
    </Card>
  );
};

export default ArticleCard;

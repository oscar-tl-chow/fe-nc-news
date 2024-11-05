import { Card, Text, Group, Badge, Image } from "@mantine/core";

const ArticleCard = ({ article }) => {
  return (
    <Card withBorder shadow="m" padding="md" component="a" href="#" h="100%">
      <Card.Section>
        <Image src={article.article_img_url} height={160} alt={article.title} />
      </Card.Section>

      <Group mt="md" mb="s">
        <Text fw={500} size="lg">
          {article.title}
        </Text>
        <Badge>{article.topic}</Badge>
      </Group>

      <Text mt="s" c="dimmed" size="sm">
        {article.body}
        {article.author}
      </Text>

      <Text>{article.votes}</Text>
    </Card>
  );
};

export default ArticleCard;

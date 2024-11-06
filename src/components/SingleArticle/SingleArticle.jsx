import {
  Text,
  Image,
  Container,
  Divider,
  Title,
  Badge,
  Space,
  Group,
} from "@mantine/core";
import { useState, useEffect } from "react";
import { getSingleArticle } from "../../api.js";
import { useParams } from "react-router-dom";
import Loading from "../Loading";
import Error from "../Error";
import Comments from "./Comments.jsx";

const SingleArticle = () => {
  const { article_id } = useParams();
  const [error, setError] = useState(undefined);
  const [article, setArticle] = useState(undefined);

  useEffect(() => {
    getSingleArticle(article_id)
      .then((articleResponse) => {
        console.log(articleResponse);
        setArticle(articleResponse);
      })
      .catch((err) => {
        console.log(err);
        setError(err);
      });
  }, [article_id]);

  if (error) return <Error error={error} />;
  if (!article) return <Loading />;

  return (
    <section>
      <Container>
        <Group justify="flex-start" align="center" component="section">
          <Badge autoContrast shadow="sm" color="grey" tt="UPPERCASE">
            TOPIC
          </Badge>
          <Text size="xl">➔</Text>
          <Badge autoContrast shadow="sm" color="red" tt="UPPERCASE">
            {article.topic}
          </Badge>
        </Group>

        <Image src={article.article_img_url} mb="lg" />
        <Title order={1} ta="left">
          {article.title}
        </Title>

        <Group justify="flex-end">
          <Badge color="black" fs="italic" ta="right" tt="lowercase">
            {article.author}
          </Badge>
        </Group>

        <Divider size="md" my="lg" />
        <Text ta="left">{article.body}</Text>
        <Divider size="md" my="lg" />
        <Title order={4} my="lg" ta="left" fs="italic">
          Comments
        </Title>
        <Comments articleId={article_id} />
      </Container>
    </section>
  );
};

export default SingleArticle;

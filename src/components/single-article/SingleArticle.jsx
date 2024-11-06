import { Text, Image, Container, Divider, Title } from "@mantine/core";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getSingleArticle } from "../api";
import Loading from "../Loading";
import Error from "../Error";

const SingleArticle = () => {
  const { article_id } = useParams();
  const [error, setError] = useState(undefined);
  const [article, setArticle] = useState(undefined);

  useEffect(() => {
    getSingleArticle(article_id)
      .then((articleResponse) => {
        console.log("Fetched article:", articleResponse);
        if (articleResponse) {
          setArticle(articleResponse);
        } else {
          setError(new Error("Article not found!"));
        }
      })
      .catch((err) => {
        setError(err);
      });
  }, [article_id]);

  if (error) return <Error error={error} />;
  if (!article) return <Loading />;

  return (
    <section>
      <Container>
        <Image src={article.article_img_url} mb="lg" />
        <Title order={1}>{article.title}</Title>
        <Text c="dimmed" component="span">
          {article.author}
        </Text>
        <Divider size="md" my="lg" />
        <Text>{article.body}</Text>
      </Container>
    </section>
  );
};

export default SingleArticle;

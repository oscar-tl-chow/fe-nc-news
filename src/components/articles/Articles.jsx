import { useEffect, useState } from "react";
import { Grid } from "@mantine/core";
import { getArticles } from "../../api";
import ArticleCard from "./ArticleCard.jsx";
import Loading from "../Loading.jsx";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  useEffect(() => {
    getArticles()
      .then((articlesResponse) => {
        setArticles(articlesResponse);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message || "Failed to fetch articles");
        setIsLoading(false);
      });
  }, []);

  if (error) return <Error message={error} />;
  if (isLoading) return <Loading />;
  if (articles.length === 0) return <span>No articles found.</span>;

  return (
    <Grid>
      {articles.map((article) => (
        <Grid.Col key={article.article_id} span={{ base: 12, md: 6, lg: 3 }}>
          <ArticleCard article={article} />
        </Grid.Col>
      ))}
    </Grid>
  );
};

export default Articles;

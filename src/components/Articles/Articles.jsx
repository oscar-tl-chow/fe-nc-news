import { useEffect, useState } from "react";
import { getArticles } from "../../api";
import { Switch, Grid, Group, Select, Space, Text, Title } from "@mantine/core";
import ArticleCard from "./ArticleCard.jsx";
import Loading from "../Loading";
import { useParams } from "react-router-dom";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const { topic_slug } = useParams();
  const [sortOption, setSortOption] = useState("Sort By");
  const [orderOption, setOrderOption] = useState("Descending");

  useEffect(() => {
    getArticles().then((articlesResponse) => {
      if (topic_slug) {
        setArticles(
          articlesResponse.filter((article) => article.topic === topic_slug)
        );
      } else {
        setArticles(articlesResponse);
      }
    });
  }, [topic_slug]);

  useEffect(() => {
    setArticles((currentArticles) => {
      let sorted = [];

      if (sortOption === "Sort By") {
        return currentArticles;
      }

      if (sortOption === "Date") {
        sorted = currentArticles.toSorted((articleA, articleB) => {
          const aDate = new Date(articleA.created_at);
          const bDate = new Date(articleB.created_at);

          if (aDate > bDate) return 1;
          if (bDate > aDate) return -1;
          return 0;
        });
      }

      if (sortOption === "Comment Count") {
        sorted = currentArticles.toSorted((articleA, articleB) => {
          const aComments = articleA.comment_count;
          const bComments = articleB.comment_count;

          return aComments - bComments;
        });
      }

      if (sortOption === "Votes") {
        sorted = currentArticles.toSorted((articleA, articleB) => {
          const aVotes = articleA.votes;
          const bVotes = articleB.votes;
          return aVotes - bVotes;
        });
      }

      if (orderOption) {
        return sorted;
      } else {
        return sorted.reverse();
      }
    });
  }, [sortOption, orderOption, setArticles]);

  if (topic_slug && articles.length === 0)
    return (
      <Text>
        {" "}
        No article found with the topic "{topic_slug}", check these out instead
        🡅
      </Text>
    );

  if (articles.length === 0) return <Loading />;

  return (
    <>
      <Title fw={500} ts="xl" fs="italic" ta="left">
        Articles
      </Title>
      <Space h="lg" />
      <Group grow align="">
        <Switch
          size="xl"
          labelPosition="left"
          label="⬍"
          offLabel="▼"
          onLabel="▲"
          value={orderOption}
          onChange={(event) => setOrderOption(event.currentTarget.checked)}
          allowDeselect={false}
        />
        <Space w="xl" />
        <Select
          value={sortOption}
          onChange={setSortOption}
          data={["Sort By", "Date", "Comment Count", "Votes"]}
          allowDeselect={false}
        />
      </Group>
      <Space h="xl" />
      <Grid>
        {articles.map((article) => {
          return (
            <Grid.Col
              key={article.article_id}
              span={{ base: 12, md: 6, lg: 3 }}
            >
              <ArticleCard article={article} />
            </Grid.Col>
          );
        })}
      </Grid>
    </>
  );
};

export default Articles;

import {
  Text,
  Image,
  Container,
  Divider,
  Title,
  Badge,
  Group,
  Button,
  Space,
  rem,
} from "@mantine/core";
import { useState, useEffect } from "react";
import { getSingleArticle, updateVote } from "../../api.js";
import { useParams } from "react-router-dom";
import Loading from "../Loading";
import Error from "../Error";
import Comments from "./Comments.jsx";
import { notifications } from "@mantine/notifications";
import { IconX, IconCheck } from "@tabler/icons-react";

const SingleArticle = () => {
  const { article_id } = useParams();
  const [error, setError] = useState(null);
  const [article, setArticle] = useState([]);
  const [votes, setVotes] = useState(0);

  const xIcon = <IconX style={{ width: rem(20), height: rem(20) }} />;

  const handleUpVote = () => {
    setArticle((pendingVote) => ({
      ...pendingVote,
      votes: pendingVote.votes + 1,
    }));
    updateVote(article_id, 1)
      .then(() => {
        setVotes(votes + 1);
      })
      .catch((err) => {
        notifications.show({
          icon: xIcon,
          title: "Error!",
          message: `Oh no, an error has occurred: ${err}`,
          color: "red",
        });
      });
  };

  const handleDownVote = () => {
    setArticle((pendingVote) => ({
      ...pendingVote,
      votes: pendingVote.votes - 1,
    }));
    updateVote(article_id, -1)
      .then(() => {
        setVotes(votes - 1);
      })
      .catch((err) => {
        notifications.show({
          icon: xIcon,
          title: "Error!",
          message: `An error has occurred: ${err}`,
          color: "red",
        });
      });
  };

  useEffect(() => {
    getSingleArticle(article_id)
      .then((articleResponse) => {
        setArticle(articleResponse);
        setVotes(articleResponse.votes);
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
        <Group justify="flex-start">
          <Badge color="green" size="xl" tt="lowercase" variant="dot">
            {article.author}
          </Badge>
        </Group>

        <Title order={1} ta="left" c="white">
          {article.title}
        </Title>

        <Space h="md" />

        <Group justify="left" align="center" component="section">
          {/* <Badge autoContrast shadow="sm" color="grey" tt="UPPERCASE">
            TOPIC
          </Badge>
          <Text size="xl">⏵</Text> */}
          <Badge autoContrast shadow="sm" color="red" tt="UPPERCASE">
            {article.topic}
          </Badge>
        </Group>

        <Space h="md" />

        <Text ta="left" c="white">
          {article.body}
        </Text>
        <Space h="md" />
        <Image src={article.article_img_url} mb="lg" radius="md" />
        <Space h="md" />
        <Group>
          <Button
            onClick={handleUpVote}
            size="compact-md"
            radius="xl"
            ta="center"
          >
            🡅
          </Button>
          <Text c="dimmed">{article.votes}</Text>
          <Button
            onClick={handleDownVote}
            size="compact-md"
            radius="xl"
            padding-top="md"
            ta="center"
          >
            🡇
          </Button>

          {/* 🡇 add in later, can be cosmetic if the function doesn't work 🡇 */}

          <Button
            size="compact-md"
            color="maroon"
            variant="filled"
            fw={500}
            tt="capitalize"
          >
            💬 {article.comment_count || 0} Comments
          </Button>

          <Button
            size="compact-md"
            color="maroon"
            variant="filled"
            fw={500}
            tt="capitalize"
          >
            ➦ Share
          </Button>
        </Group>

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

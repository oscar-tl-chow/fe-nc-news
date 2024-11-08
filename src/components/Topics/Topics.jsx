import { useEffect, useState } from "react";
import { getTopics } from "../../api";
import { Group, Space, Title } from "@mantine/core";
import Loading from "../Loading";
import TopicCard from "./TopicCard";
import { Outlet } from "react-router-dom";

const Topics = () => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    getTopics().then((topicsResponse) => {
      setTopics(topicsResponse);
    });
  }, []);

  if (topics.length === 0) return <Loading />;

  return (
    <>
    <Title fw={500} ts="xl" fs="italic">
        Topics
      </Title>
      <Space h="xl" />
      <Group w="100%" mb="md" align="center">
        {topics.map((topic) => {
          return <TopicCard key={topic.slug} topic={topic} />;
        })}
      </Group>
      <Outlet />
    </>
  );
};

export default Topics;

import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import {
  Center,
  createTheme,
  MantineProvider,
  AppShell,
  Group,
  Text,
  NavLink,
  Flex,
  Space,
} from "@mantine/core";
import Articles from "./components/Articles/Articles.jsx";
import SingleArticle from "./components/SingleArticle/SingleArticle.jsx";
import Error from "./components/Error.jsx";
import Topics from "./components/Topics/Topics.jsx";
import { Notifications } from "@mantine/notifications";

const theme = createTheme({
  defaultRadius: "2rem",
  primaryColor: "red",
  defaultProps: {
    popoverProps: { withinPortal: true },
  },
});

function App() {
  return (
    <MantineProvider theme={theme} defaultColorScheme="dark">
      <Notifications position="top-right" zIndex={1000} />
      <AppShell header={{ height: 80 }}>
        <AppShell.Header>
          <Group justify="space-between" h="100%" px="md">
            <Center>
              <Link to="/">
                <Text size="1rem" ta="left" fw={500} fs="italic">
                  [nc]
                </Text>
                <Text size="2rem" ta="left" fw={700}>
                  🗣
                </Text>
              </Link>
              <Link to="/">
                <Text size="3rem" ta="right" fw={900}>
                  NEWS
                </Text>
              </Link>

              <Space w="lg" />

              <Flex direction="row" align="center" width="1rem" size="1rem">
                <NavLink component={Link} to="/" size="1rem" label="🏠︎Home" />
                <NavLink component={Link} to="/topics" label="☰󠀠󠀠Topics" />
              </Flex>
            </Center>
          </Group>
        </AppShell.Header>

        <AppShell.Main>
          <Routes>
            <Route path="/" element={<Articles />} />
            <Route path="/article/:article_id" element={<SingleArticle />} />
            <Route path="*" element={<Error />} />
            <Route path="/topics" element={<Topics />}>
              <Route path=":topic_slug" element={<Articles />} />
            </Route>
          </Routes>
        </AppShell.Main>
      </AppShell>
    </MantineProvider>
  );
}

export default App;

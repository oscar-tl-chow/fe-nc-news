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
} from "@mantine/core";
import Articles from "./components/Articles/Articles.jsx";
import SingleArticle from "./components/SingleArticle/SingleArticle.jsx";
import Error from "./components/Error.jsx";
import { Notifications } from "@mantine/notifications";

const theme = createTheme({
  defaultRadius: "2rem",
  primaryColor: "red",
});

function App() {
  return (
    <MantineProvider theme={theme} defaultColorScheme="dark">
      <Notifications position="top-right" zIndex={1000} />
      <AppShell padding="md" header={{ height: 100 }}>
        <AppShell.Header>
          <Group justify="space-between" h="100%" px="md">
            <Center>
              <Link to="/">
                <Text size="2rem" ta="left" fs="italic">
                  [nc]
                </Text>
                <Text size="4rem" ta="right" fw={700}>
                  🗣NEWS
                </Text>
              </Link>
            </Center>

            <Group h="100%">
              <NavLink component={Link} to="/" label="🏠︎ Home" />
            </Group>
          </Group>
        </AppShell.Header>

        <AppShell.Main>
          <Routes>
            <Route path="/" element={<Articles />} />
            <Route path="/article/:article_id" element={<SingleArticle />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </AppShell.Main>
      </AppShell>
    </MantineProvider>
  );
}

export default App;

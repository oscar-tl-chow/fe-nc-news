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

const theme = createTheme({
  defaultRadius: "2rem",
  primaryColor: "red",
});

function App() {
  return (
    <MantineProvider theme={theme} defaultColorScheme="dark">
      <AppShell padding="md" header={{ height: 60 }}>
        <AppShell.Header>
          <Group justify="space-between" h="100%" px="md">
            <Text size="3rem">
              <Center>
                <Link to="/">[nc] 🗣NEWS</Link>
              </Center>
            </Text>

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

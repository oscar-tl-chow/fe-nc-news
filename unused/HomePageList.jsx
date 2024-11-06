import { Topic } from "@mui/icons-material";
import { Link, Route, Routes } from "react-router-dom";

const HomePageList = () => {
  return (
    <section id="home-page-list">
      <nav>
        <Link to="/top-topic" className="top-topic-button">
          Top Topic
        </Link>
        <Link to="/top-article" className="top-article-button">
          Top Article
        </Link>
        <Routes>
          <Route path="/topics" element={<Topic />} />
        </Routes>
      </nav>
    </section>
  );
};

export default HomePageList;

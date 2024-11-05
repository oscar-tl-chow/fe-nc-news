import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header id="header">
      <nav>
        <Link to="/">
          <h1>NC NEWS</h1>
        </Link>
        <Link to="/home" className="Home-button">
          Home
        </Link>
        <Link to="/topics" className="topics-button">
          Topics
        </Link>
      </nav>
    </header>
  );
};

export default Header;

import { Link } from "react-router";

function Nav() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/projects">projects</Link>
          </li>
          <li>
            <Link to="/articles">articles</Link>
          </li>
          <li>
            {" "}
            <Link to="/contact">contact </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;

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
            <Link to="/blogs">blogs</Link>
          </li>
          <li>
            <Link to="/about">about</Link>
          </li>
          <li>
            <Link to="/contact">contact </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;

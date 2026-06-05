import { Link } from "react-router";
import styles from "./Nav.module.css";

function Nav() {
  return (
    <header>
      <nav className={styles.navWrapper}>
        <ul className={styles.navLinks}>
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

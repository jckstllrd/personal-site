import { Link } from "react-router";
import styles from "./Nav.module.css";

function Nav() {
  return (
    <nav className={styles.navWrapper}>
      <ul className={styles.navLinks}>
        <li>
          <Link to="/projects">projects</Link>
        </li>
        <li>
          <Link to="/articles">articles</Link>
        </li>
        <li>
          <Link to="/about">about</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;

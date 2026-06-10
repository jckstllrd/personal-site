import { Link } from "react-router";
import styles from "./Nav.module.css";
import { useState } from "react";

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    console.log("clicked");
    setMenuOpen(!menuOpen);
  };
  const closeMenu = () => {
    setMenuOpen(false);
  };
  return (
    <nav className={styles.navWrapper}>
      <ul className={`${styles.navLinks} ${menuOpen ? styles.open : ""}`}>
        <li>
          <Link to="/projects" onClick={closeMenu}>
            projects
          </Link>
        </li>
        <li>
          <Link to="/articles" onClick={closeMenu}>
            articles
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={closeMenu}>
            about
          </Link>
        </li>
      </ul>
      <div className={styles.hamburgerMenu} onClick={toggleMenu}>
        <span className={`${menuOpen ? styles.b1Open : ""}`} />
        <span className={`${menuOpen ? styles.b2Open : ""}`} />
        <span className={`${menuOpen ? styles.b3Open : ""}`} />
      </div>
    </nav>
  );
}

export default Nav;

import { NavLink } from "react-router";
import styles from "./Nav.module.css";
import { useState } from "react";

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const closeMenu = () => {
    setMenuOpen(false);
  };
  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `${styles.navLink} ${isActive ? styles.activeLink : ""}`;
  return (
    <nav className={styles.navWrapper}>
      <ul className={`${styles.navLinks} ${menuOpen ? styles.open : ""}`}>
        <li>
          <NavLink to="/projects" onClick={closeMenu} className={navLinkClass}>
            projects
          </NavLink>
        </li>
        <li>
          <NavLink to="/articles" onClick={closeMenu} className={navLinkClass}>
            articles
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" onClick={closeMenu} className={navLinkClass}>
            about
          </NavLink>
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

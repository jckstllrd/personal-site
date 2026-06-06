import Nav from "../Nav/Nav";
import styles from "./Header.module.css";

function Header() {
  return (
    <header>
      <a className={styles.logo} href="/">
        <span>jack stallard</span>
      </a>
      <Nav />
    </header>
  );
}

export default Header;

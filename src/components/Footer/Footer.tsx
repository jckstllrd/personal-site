import styles from "./Footer.module.css";
import ghLogo from "../../content/GitHub_Invertocat_Black_Clearspace.png";
import inLogo from "../../content/InBug-Black.png";

export default function Footer() {
  return (
    <footer>
      <ul className={styles.socialsList}>
        <li>
          <a href="https://github.com/jckstllrd">
            <img className={styles.img} src={ghLogo} alt="GitHub Logo" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/jack-stallard-a67899192/">
            <img src={inLogo} alt="LinkedIn Logo" className={styles.inLogo} />
          </a>
        </li>
      </ul>
    </footer>
  );
}

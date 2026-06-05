import styles from "./Footer.module.css";
import ghlogo from "../../content/GitHub_Invertocat_White_Clearspace.png";

export default function Footer() {
  return (
    <footer>
      <ul className={styles.socialsList}>
        <li>
          <a href="https://github.com/jckstllrd">
            <img src={ghlogo} alt="GitHub Logo" />
          </a>
        </li>
      </ul>
    </footer>
  );
}

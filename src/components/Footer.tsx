import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer>
      <ul className={styles.socialsList}>
        <li>
          <a href="https://github.com/jckstllrd">GitHub</a>
        </li>
        <li>
          <a href="https://dev.to/jckstllrd">Dev.To</a>
        </li>

        <li>
          <a href="https://x.com/jackstllrd">X</a>
        </li>
      </ul>
    </footer>
  );
}

import styles from "./Footer.module.css";
import ghLogo from "../../content/GitHub_Invertocat_Black_Clearspace.png";
import inLogo from "../../content/InBug-Black.png";

export default function Footer() {
  return (
    <footer>
      <ul className={styles.socialsList}>
        <li>
          <a href="https://github.com/jckstllrd" aria-label="GitHub">
            <img className={styles.img} src={ghLogo} alt="GitHub Logo" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/jack-stallard-a67899192/"
            aria-label="LinkedIn"
          >
            <img src={inLogo} alt="LinkedIn Logo" className={styles.inLogo} />
          </a>
        </li>
        <li>
          <a href="mailto:jackstallard17@gmail.com" aria-label="Email">
            <svg className={styles.icon} viewBox="0 0 24 24">
              <rect
                x="2"
                y="4"
                width="20"
                height="16"
                rx="2"
                fill="currentColor"
              />
              <path
                d="M2 6l10 7 10-7"
                fill="none"
                stroke="var(--color-background)"
                strokeWidth="2"
              />
            </svg>
          </a>
        </li>
      </ul>
    </footer>
  );
}

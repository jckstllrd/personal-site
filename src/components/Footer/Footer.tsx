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
        <li>
          <a
            href="/jackstallard%20-%20CV.pdf"
            aria-label="Download CV"
            download
          >
            <svg className={styles.icon} viewBox="0 0 24 24">
              <path
                d="M8 3h6l4 4v12a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"
                fill="currentColor"
              />
              <path
                d="M14 3v4h4M9 13h6M9 17h6"
                fill="none"
                stroke="var(--color-background)"
                strokeWidth="1.5"
              />
            </svg>
          </a>
        </li>
      </ul>
    </footer>
  );
}

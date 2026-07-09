import Container from "@/components/Container/Container";
import styles from "./Home.module.css";
import { useNavigate } from "react-router";

function Home() {
  const navigate = useNavigate();

  return (
    <Container>
      <div className={styles.hero}>
        <div className={styles.terminalLine}>
          <p className={styles.prompt}>jack@site:~$ whoami</p>
          <h1>
            <span className={styles.typed}>hi, i'm jack</span>
          </h1>
        </div>
        <p className={styles.tagline}>
          ai strategy consultant, rediscovering a passion for building
          software
        </p>
        <div className={styles.ctaButtons}>
          <button
            className={styles.primaryButton}
            onClick={() => navigate("/projects")}
          >
            view my projects
          </button>
          <button
            className={styles.secondaryButton}
            onClick={() => navigate("/articles")}
          >
            view my articles
          </button>
        </div>
      </div>
    </Container>
  );
}
export default Home;

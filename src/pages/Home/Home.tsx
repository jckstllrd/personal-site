import Container from "@/components/Container/Container";
import styles from "./Home.module.css";
import { useNavigate } from "react-router";

function Home() {
  const navigate = useNavigate();

  return (
    <Container>
      <div className={styles.hero}>
        <h1>hi, i'm jack</h1>
        <div className={styles.ctaButtons}>
          <button onClick={() => navigate("/projects")}>
            view my projects
          </button>
          <button onClick={() => navigate("/articles")}>
            view my articles
          </button>
        </div>
      </div>
    </Container>
  );
}
export default Home;

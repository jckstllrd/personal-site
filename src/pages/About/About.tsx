import Container from "@/components/Container/Container";
import styles from "./About.module.css";

function About() {
  return (
    <Container>
      <div className={styles.aboutPage}>
        <h1>about</h1>
        <p>
          I am a CS Grad that is currently rediscovering a passion for
          programming.
        </p>
        <p>
          I work as an AI Strategy Consultant within the AI & Data practice at
          Accenture for Capital Market clients, working across the SDLC to
          improve and identify the best use cases for bringing in or creating
          AI tooling. I hope to help developers know when and how to use the
          various different embodiments of AI in their work.
        </p>
      </div>
    </Container>
  );
}

export default About;

import Container from "@/components/Container/Container";
import styles from "./Projects.module.css";
import Project from "@/components/Project/Project";

function Projects() {
  return (
    <Container>
      <div className={styles.projectPage}>
        <h1>projects</h1>
        <div className={styles.projects}>
          <Project
            name={"Habit Tracker"}
            desc={
              "A full stack habit tracker app build with aut, api endpoints, controlled routes and a postgresql database"
            }
            liveLink={"https://habit-tracker-sepia-beta.vercel.app/"}
            repoLink={"https://github.com/jckstllrd/habit-tracker"}
          />
        </div>
      </div>
    </Container>
  );
}

export default Projects;

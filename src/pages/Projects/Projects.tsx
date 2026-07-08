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
              "A full stack habit tracker app build with auth, api endpoints, controlled routes and a postgresql database"
            }
            liveLink={"https://habit-tracker-sepia-beta.vercel.app/"}
            repoLink={"https://github.com/jckstllrd/habit-tracker"}
          />
          <Project
            name={"Personal Site"}
            desc={
              "A full stack personal webpage to host my projects and articles, that will be a continued work in progress"
            }
            liveLink={"https:/jackstallard.dev"}
            repoLink={"https://github.com/jckstllrd/personal-site"}
          />
          <Project
            name={"FPmL"}
            desc={
              "A machine learning optimsation project for simulating the Fantasy Premier League using real-world football stats"
            }
            repoLink={"https://github.com/jckstllrd/FPmL"}
          />
        </div>
      </div>
    </Container>
  );
}

export default Projects;

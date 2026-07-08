import styles from "./Project.module.css";

interface Props {
  name: string;
  desc: string;
  liveLink?: string;
  repoLink: string;
}

function Project({ name, desc, liveLink, repoLink }: Props) {
  return (
    <div className={styles.projectContainer}>
      <h2>{name}</h2>
      <p>{desc}</p>
      <div className={styles.projectLinks}>
        <a className={styles.links} href={repoLink}>
          repo
        </a>
        {liveLink && (
          <a className={styles.links} href={liveLink}>
            live
          </a>
        )}
      </div>
    </div>
  );
}

export default Project;

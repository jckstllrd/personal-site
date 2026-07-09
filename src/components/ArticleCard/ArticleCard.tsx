import styles from "./ArticleCard.module.css";
interface ArticleCardProps {
  id: number;
  title: string;
  desc: string;
  datePublished: string;
  readingTime: number;
  link: string;
}
function ArticleCard({
  id,
  title,
  desc,
  datePublished,
  readingTime,
  link,
}: ArticleCardProps) {
  return (
    <a key={id} href={link} className={styles.articleLink}>
      <div className={styles.articleCard}>
        <h2>{title}</h2>
        <div className={styles.articleDetails}>
          <p className={styles.datePublished}>{datePublished}</p>
          <p className={styles.readingTime}>{readingTime} min read</p>
        </div>
        <p>{desc}</p>
      </div>
    </a>
  );
}

export default ArticleCard;

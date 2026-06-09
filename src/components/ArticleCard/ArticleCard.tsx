import { useNavigate } from "react-router";
import styles from "./ArticleCard.module.css";
interface ArticleCardProps {
  id: number;
  title: string;
  desc: string;
  datePublished: string;
  readingTime: number;
}
function ArticleCard({
  id,
  title,
  desc,
  datePublished,
  readingTime,
}: ArticleCardProps) {
  const navigate = useNavigate();
  return (
    <div
      className={styles.articleCard}
      onClick={() => navigate(`/articles/${id}`)}
    >
      <h2>{title}</h2>
      <div className={styles.articleDetails}>
        <p className={styles.datePublished}>{datePublished}</p>
        <p className={styles.readingTime}>{readingTime} min read</p>
      </div>
      <p>{desc}</p>
    </div>
  );
}

export default ArticleCard;

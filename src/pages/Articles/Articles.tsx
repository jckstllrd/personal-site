import Container from "@/components/Container/Container";
import ArticleCard from "@/components/ArticleCard/ArticleCard";
import styles from "./Articles.module.css";

function Articles() {
  return (
    <Container>
      <div className={styles.articlesPage}>
        <h1>articles</h1>
        <div className={styles.articleList}>
          <ArticleCard
            id={1}
            title={"Learning to Learn Again"}
            desc={
              "a short article on the rediscovery of a passion and the dedicated practice needed to pursue it"
            }
            datePublished={"7th March 2026"}
            readingTime={6}
            link={"https://dev.to/jckstllrd/learning-to-learn-again-48j3"}
          />
        </div>
      </div>
    </Container>
  );
}

export default Articles;

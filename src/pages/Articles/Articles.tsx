import Container from "@/components/Container/Container";
import ArticleCard from "@/components/ArticleCard/ArticleCard";

function Articles() {
  return (
    <Container>
      <h1>articles</h1>
      <ArticleCard
        id={1}
        title={"Learning to Learn Again"}
        desc={
          "a short article on the rediscovery of a passion and the dedicated practice needed to pursue it"
        }
        datePublished={"17th March 2026"}
        readingTime={6}
      />
    </Container>
  );
}

export default Articles;

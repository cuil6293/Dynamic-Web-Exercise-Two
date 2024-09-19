import styles from "./page.module.css";
import data from "./data.json";
import ArticleCard from "./components/articleCard";

export default function Home() {
  return (
    <main className={styles.pageWrapper}>
      <h1>Articles</h1>
      {data.map((article, i) => (
        <ArticleCard 
        key={i}
        blurb={article.blurb}
        image={article.image}
        id={article.id}
        publishedDate={article.publishedDate} 
        title={article.title}
        
        />
        ))}
    </main>
  );
}

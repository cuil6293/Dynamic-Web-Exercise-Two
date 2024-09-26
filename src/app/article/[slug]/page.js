import data from "../../data.json";
import styles from "../../page.module.css";

export default function Article({ params }){
    const slug = params.slug;

    const articleData = data.find((article) => slug === article.id);

    return (
        <main>
            <div className={styles.articlePageHeaderWrapper}
                style={{
                    backgroundImage: `url(${articleData.image.url})`,
                }}
            >
                <h1>{articleData.title}</h1>
                <p>{articleData.publishedDate}</p>
                <p>{articleData.blurb}</p>
            </div>
            {articleData.articleText?.map((text, i) => (
                <p key={i}>{text.data}</p>
            ))}
        </main>
    );
}
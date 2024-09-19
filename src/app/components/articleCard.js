import Link from "next/link";
import styles from "../page.module.css";

export default function ArticleCard({ blurb, image, id, publishedDate, title }) {
    return (
        <div className={styles.articleCardWrapper}>
            <img src={image.url} alt={image.alt} />
            <div className={styles.articleCardText}>
                <h2>{title}</h2>
                <p className={styles.articleCardDate}>{publishedDate}</p>
                <p>{blurb}</p>
                <Link href={`article/${id}`}>Read More</Link>
            </div>
        </div>
    );
}
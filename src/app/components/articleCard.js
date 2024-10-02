import Link from "next/link";
import styles from "../page.module.css";
import { formatDateForArticle } from "./utils";

export default function ArticleCard({ blurb, image, id, publishedDate, title }) {
    const freshDate = new Date(publishedDate);
    const formattedDate = `${freshDate.getMonth() + 1}/${freshDate.getDay()}/${freshDate.getFullYear()}`;
    return (
        <div className={styles.articleCardWrapper}>
            <img src={image.url} alt={image.alt}/>
            <div className={styles.articleCardText}>
                <h2>{title}</h2>
                <p className={styles.articleCardDate}>{formatDateForArticle(publishedDate)}</p>
                <p>{blurb}</p>
                <Link href={`article/${id}`}>Read More</Link>
            </div>
        </div>
    );
}
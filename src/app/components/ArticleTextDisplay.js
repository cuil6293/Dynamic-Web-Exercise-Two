export default function ArticleTextDisplay({ data , type }) {
    switch(type) {
        case 'p':
            return <p>{data}</p>;
        case 'h2':
            return <h2>{data}</h2>;
        case 'h3':
            return <h3>{data}</h3>;
        case 'h4':
            return <h4>{data}</h4>;
        default:
            return <p>{data}</p>;
    }

}
export default function Article({ params }){
    console.log("params:", params);
    return (
        <main>
            <h1>Article: {params.slug}</h1>
        </main>
    );
}
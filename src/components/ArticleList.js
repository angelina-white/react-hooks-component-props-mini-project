import Article from "./Article.js"

function ArticleList(posts)
{

    const postElements = posts.posts.map((e) =>
    {
        return <Article key={e.id} title={e.title} date={e.date} preview={e.preview}></Article>
    })

    return (
        <main>
            {postElements}
        </main>
    )
}

export default ArticleList;
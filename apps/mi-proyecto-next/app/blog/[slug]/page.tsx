type Post = {
    slug: string
    titulo: string
    contenido: string
}

const posts : Post[] = [
    {
        slug: "que-es-nextjs",
        titulo: "Que es next js",
        contenido: "Next.js permite optimizar aplicaciones React"
    },
    {
        slug: "ssr-vs-ssg",
        titulo: "SSR vs SSG",
        contenido: "SSR genera contenido por solicitud y SSG durante eñ build"
    },
     {
        slug: "querido-profesor",
        titulo: "Que es mi querido profesor",
        contenido: "Un profesor que me quiere"
    }

]


export function generateStaticParams(){

    return posts.map((post) =>({
        slug: post.slug
    }))
}

type Props = {
    params: Promise<{slug: string}>
}

export default async function PostPage({params}: Props)
{
    const {slug} = await params
    const post = posts.find((item) => item.slug === slug)
    
    if(!post){
        return <h1>Articulo no existe</h1>
    }

    return (
        <article>
            <h1>{post?.titulo}</h1>
            <p>{post?.contenido}</p>
        </article>
    );
}


import { server } from '../../../config'
// import {useRouter} from 'next/router'
import Link from "next/link"
import Meta from '../../../components/Meta'

const article = ({ article }) => {

    // const router = useRouter()
    // const {id} = router.query

    return (
        <>
            <Meta title={article.title} description={article.excerpt} />
            <h1>{article.title}</h1>
            <p>{article.body}</p>
            <br />
            <Link href='/'> Go Back</Link>
        </>
    )
}

////*********************************************Realiza el fetch en cada request
//********************************************************************************************** */
//context permite acceder al id que se pasa por la url
// export const getServerSideProps = async (context) => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)

//     const article = await res.json()

//     return {
//         props: { article }
//     }
// }

////*********************************************Realiza el fetch en tiempo de compilacion
//********************************************************************************************** */
// export const getStaticProps = async (context) => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)

//     const article = await res.json()

//     return {
//         props: { article }
//     }
// }

// //Generar paginas dinamicamente usando getStaticProps con getStaticPaths
// export const getStaticPaths = async () => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)

//     const articles = await res.json()

//     const ids = articles.map(article => article.id)
//     const paths = ids.map(id => ({params: {id: id.toString()}}))

//     return{
//         paths,
//         fallback: false//permite ir a la pg 404 si el id pasado por la url no existe
//     }
// }


export const getStaticProps = async (context) => {
    const res = await fetch(`${server}/api/articles/${context.params.id}`)

    const article = await res.json()

    return {
        props: { article }
    }
}

//Generar paginas dinamicamente usando getStaticProps con getStaticPaths
export const getStaticPaths = async () => {
    const res = await fetch(`${server}/api/articles`)

    const articles = await res.json()

    const ids = articles.map(article => article.id)
    const paths = ids.map(id => ({ params: { id: id.toString() } }))

    return {
        paths,
        fallback: false//permite ir a la pg 404 si el id pasado por la url no existe
    }
}

export default article

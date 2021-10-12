import Link from "next/link"

const about = ({ article }) => {

    // const router = useRouter()
    // const {id} = router.query

    return (
        <>
            <h1>{article.title}</h1>
            <p>{article.body}</p>
            <br />
            <Link href='/'> Go Back</Link>
        </>
    )
}

////*********************************************Realiza el fetch en cada request
//********************************************************************************************** */
// context permite acceder al id que se pasa por la url
export const getStaticProps = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/1`)

    const article = await res.json()

    return {
        props: { article }
    }
}

export default about
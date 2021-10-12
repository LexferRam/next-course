
// const page1 = ({article}) => {
//     console.log(article)
//     return ( 
//         <div>
//             {article.map(post => (
//                "aqui"
               
//             ))}
//         </div>
//     )
// }

// //context permite acceder al id que se pasa por la url
// export const getServerSideProps = async (context) => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)

//     const article = await res.json()

//     return {
//         props: { article }
//     }
// }

// export default page1

import Link from "next/link"

const page1 = () => {

    // const router = useRouter()
    // const {id} = router.query

    return (
        <>
           page1
        </>
    )
}


export default page1
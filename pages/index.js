import Head from 'next/head';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
 h1 {
   font-size: 4rem;
 }
`;
const Container = styled.div`
  text-align: center;
`;
const CustomP = styled.p`
  color:blue;
  font-size:15px;
`
export default function Home({todos}) {
  return (
    <>
      <Head>
        <title>SSR styled-components with Next.js Starter</title>
      </Head>
      <Container>
        <GlobalStyle />
        <h1>Hello, world!</h1>
        {todos.map((todo,i) => (
          <CustomP key={i}>{todo.title}</CustomP>
        ))}
      </Container>
    </>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos')

  const todos = await res.json()

  return{
    props:{todos}
  }
}
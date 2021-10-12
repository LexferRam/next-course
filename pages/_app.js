import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
  
    <div suppressHydrationWarning>
      {typeof window === 'undefined' ? null : <Component {...pageProps} />}
    </div>
    </Layout>
  )
}

export default MyApp
 
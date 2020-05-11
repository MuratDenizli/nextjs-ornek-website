import Layout from '../components/layout'
import Head from 'next/head'
function HomePage() {
  return (
    <Layout>
      <Head>
        <title>Ana sayfa</title>
      </Head>
      <h1 className="title">Anasayfa</h1>
      <style global jsx>{`
        body{
            background-color:yellow;
        }
      `}</style>
    </Layout>
  )
}

export default HomePage

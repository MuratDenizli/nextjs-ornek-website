import Navigation from './navigation'
import Head from 'next/head'

function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Murat Denizli'nin Web Sitesi</title>
      </Head>
      <main>{children}</main>
    </div>
  )
}

export default Layout

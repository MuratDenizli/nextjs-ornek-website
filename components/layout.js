import Navigation from './navigation'
import Head from 'next/head'

function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Murat Denizli'nin Web Sitesi</title>
      </Head>
      <Navigation />
      <main>{children}</main>
      <footer>design by murat</footer>
    </div>
  )
}

export default Layout

import Layout from '../components/layout'
import Head from 'next/head'
import Link from 'next/link'
import unfetch from 'isomorphic-unfetch'
function HomePage({ characters }) {
  return (
    <Layout>
      <Head>
      <title>THE RICK AND MORTY</title>
      </Head>
      <h1 className="title">THE RICK AND MORTY</h1>
      {characters.results.map((character) => (
        <ul>
          <li key={character.id}>
            <Link href="character/[id]" as={`/character/${character.id}`}>
              <a>{character.name}</a>
            </Link>
          </li>
        </ul>
      ))}
      <style global jsx>{``}</style>
    </Layout>
  )
}

export async function getStaticProps() {
  const data = await unfetch('https://rickandmortyapi.com/api/character/')
  const characters = await data.json()
  return {
    props: {
      characters
    }
  }
}

export default HomePage

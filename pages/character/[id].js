import Layout from '../../components/layout'
import Head from 'next/head'
import unfetch from 'isomorphic-unfetch'
function CharacterDetail({character}) {
  return (
    <Layout>
      <Head>
        <title>THE RICK AND MORTY</title>
      </Head>
      <div>
          <h1>{character.name}</h1>
      </div>
      <figure>
          <img src={character.image} alt={character.name}></img>
      </figure>
    </Layout>
  )
}

export async function getStaticPaths() {
  const data = await unfetch('https://rickandmortyapi.com/api/character/')
  const characters = await data.json()
  return {
    paths: characters.results.map((character) => {
      return { params: { id: `${character.id}` } }
    }),
    fallback: false
  }
}

export async function getStaticProps({params}) {
  const data = await unfetch('https://rickandmortyapi.com/api/character/'+params.id)
  const character = await data.json()
  return {
    props: {
        character
    }
  }
}

export default CharacterDetail

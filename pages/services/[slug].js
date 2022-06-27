import Layout from '../../components/Layout'
import Title from '../../components/Title'
import { getAllServices, getTheProps } from '../utils/routes'
import { useStore } from 'zustand'
import { services, lang } from '../../content/services'
import InternalServices from '../../components/InternalServices'
import Button from '../../components/Button'
import Square from '../../components/Square'

const Post = props => {
  return (
    <Layout>
      <InternalServices title={props.title} text="" />
      {props.data.numberToCall && <Square />}
      <Button text="ALL SERVICES" />
    </Layout>
  )
}

export async function getStaticPaths() {
  let paths = []
  lang.map(lang => {
    paths.push(...getAllServices(lang))
  })

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params, id }) {
  // Fetch necessary data for the blog post using params.id
  console.log('PARAMS', params, id)
  const lang = 'ita'
  const props = getTheProps(params.id, lang)
  return {
    props: props,
  }
}

export default Post

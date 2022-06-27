import Layout from '../../components/Layout'
import { lang } from '../../content/services'
import getAllServices from '../../utils/getAllServices'

const Post = () => {
  return (
    <Layout>
      <h1>Post</h1>
    </Layout>
  )
}

export function getServerSideProps() {
  const zustandStore = initializeStore()
  return {
    props: {
      // the "stringify and then parse again" piece is required as next.js
      // isn't able to serialize it to JSON properly
      initialZustandState: JSON.parse(JSON.stringify(zustandStore.getState())),
    },
  }
}

// export function getStaticPaths() {
//   let paths = getAllServices('ita')
//   //   lang.map(el => {
//   //     paths.push(getAllServices(el))
//   //   })
//   return {
//     paths: paths,
//     fallback: false,
//   }
// }

export default Post

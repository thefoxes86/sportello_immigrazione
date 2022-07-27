import Layout from '../../components/Layout'
import { lang } from '../../content/services'
import { getAllServices, getSingleService } from '../../utils/getAllServices'
import Link from 'next/link'
import { useState } from 'react'
import styles from '../../styles/Single.module.css'

const Post = ({ data }) => {
  const [detail, setDetail] = useState(JSON.parse(data))

  return (
    <Layout>
      <h1 className={styles.titleSingle}>{detail.text}</h1>

      {detail.data.documenti && (
        <div className={styles.containerDocumenti}>
          {detail.data.documenti.necessari && (
            <>
              <h2 className={styles.titleDocumenti}>DOCUMENTI NECESSARI:</h2>
              {detail.data.documenti.necessari.map((item, index) => (
                <a href={item.link}>
                  <p className={styles.itemList}>
                    <span className={styles.pointList}></span> {item.title}
                  </p>
                </a>
              ))}
            </>
          )}
          {detail.data.documenti.domestico && (
            <>
              <h2 className={styles.titleDocumenti}>
                IN CASO DI LAVORO DOMESTICO :
              </h2>
              {detail.data.documenti.domestico.map((item, index) => (
                <a href={item.link}>
                  <p className={styles.itemList}>
                    <span className={styles.pointList}></span> {item.title}
                  </p>
                </a>
              ))}
            </>
          )}
          {detail.data.documenti.dipendente && (
            <>
              <h2 className={styles.titleDocumenti}>
                IN CASO DI SOCIO DIPENDENTE :
              </h2>
              {detail.data.documenti.dipendente.map((item, index) => (
                <p className={styles.itemList}>
                  <span className={styles.pointList}></span> {item.title}
                </p>
              ))}
            </>
          )}
        </div>
      )}

      {/* Show advice Empty */}
      {detail.data.adviceEmpty && (
        <div className={styles.containerAdviceEmpty}>
          {detail.data.adviceEmpty.text}
        </div>
      )}

      {/* Show Advice Full with background */}
      {detail.data.adviceFull && (
        <div className={styles.containerAdviceFull}>
          {detail.data.adviceFull.text}
        </div>
      )}

      {/* Square Button for calling  */}
      {detail.data.numberToCall && (
        <div className={styles.callSquare}>
          <p>Per questo servizio chiamare:</p>
          <p>+39 0584 634891</p>
        </div>
      )}

      {/* Came back Button */}
      <Link href="/">
        <a className={styles.cameBackButton}>
          <div>ALL SERVICES</div>
        </a>
      </Link>
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getAllServices('ita')

  return {
    paths: paths,
    fallback: true,
  }
}

export async function getStaticProps({ params }) {
  let data = JSON.stringify(getSingleService('ita', params.slug))

  // Pass post data to the page via props
  return { props: { data } }
}

export default Post

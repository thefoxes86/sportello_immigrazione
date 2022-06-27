import styles from '../styles/Home.module.css'

const InternalServices = ({ lang, text, title }) => {
  return (
    <>
      <h1 className={styles.title}>{title}</h1>
      <p>{text}</p>
    </>
  )
}

export default InternalServices

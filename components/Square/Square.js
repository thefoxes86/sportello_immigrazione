import Link from 'next/link'
import styles from './Square.module.css'

const Square = props => {
  return (
    <div className={styles.square}>
      <p>Per questo servizio chiamare:</p>
      <p>+39 0584 634891</p>
    </div>
  )
}

export default Square

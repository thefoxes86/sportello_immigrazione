import Link from 'next/link'
import styles from './Button.module.css'

const Button = props => {
  return (
    <Link href="/">
      <button className={styles.button}>{props.text}</button>
    </Link>
  )
}

export default Button

import styles from './Service.module.css'
import Link from 'next/link'

const Service = ({ icon, text }) => {
  return (
    <Link href="/services/post">
      <div className="flex items-center justify-start w-screen gap-8 px-7 py-3">
        <span>{icon}</span>
        <p className=" text-left text-lg">{text}</p>
      </div>
    </Link>
  )
}

export default Service

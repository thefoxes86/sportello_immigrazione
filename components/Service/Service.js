import styles from './Service.module.css'
import Link from 'next/link'

const Service = ({ icon, text, slug, lang }) => {
  return (
    <Link href={`/services/${slug}`}>
      <a>
        {lang === 'ara' ? (
          <div className="flex items-center justify-end w-screen gap-8 px-7 py-3">
            <p className=" text-right text-lg">{text}</p>
            <span>{icon}</span>
          </div>
        ) : (
          <div className="flex items-center justify-start w-screen gap-8 px-7 py-3">
            <span>{icon}</span>
            <p className=" text-left text-lg">{text}</p>
          </div>
        )}
      </a>
    </Link>
  )
}

export default Service

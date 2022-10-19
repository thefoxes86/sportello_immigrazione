import styles from '../styles/Home.module.css'
import { useEffect, useState } from 'react'

const titleTranslation = {
  ita: 'Presso lo Sportello immigrazione potrete disporre dei seguenti servizi:',
  eng: 'At the Immigration desk you will find the following services:',
  fra: "LE BUREAU D'IMMIGRATION OFFRE GRATUITEMENT LES SERVICES SUIVANTS :",
  spa: 'Nuestros servicios:',
  rus: 'Отдел по делам иммигрантов оказывает бесплатно следующие услуги:',
  bra: 'Nossos serviços:',
  ara: ':يقدم مكتب الهجرة الخدمات التالية مجانًا',
  alb: 'SHERIBMET TONA:',
  cin: '',
}

const Title = ({ lang }) => {
  const [translation, setTranstalion] = useState(titleTranslation[lang])

  useEffect(() => {
    setTranstalion(titleTranslation[lang])
  }, [lang])
  return (
    <h1 className={lang === 'ara' ? styles.titleAra : styles.title}>
      {translation}
    </h1>
  )
}

export default Title

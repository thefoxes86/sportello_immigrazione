import { services } from '../content/services'

const getTheProps = (slug, lang) => {
  let res = {}
  let obj = services[lang].map(el => {
    if (el.slug === slug) {
      res = {
        title: el.text,
        data: el.data,
      }
    }
  })

  return res
}

export default getTheProps

import { services } from '../../content/services'

export const getAllServices = lang => {
  let arraySlug = []
  services[lang].map(({ slug, id }) => {
    arraySlug.push({
      params: {
        id: id,
        slug: slug,
      },
    })
  })

  return arraySlug
}

export const getTheProps = (id, lang) => {
  let res = {}
  let obj = services[lang].map(el => {
    if (el.id === id) {
      res = {
        title: el.text,
        data: el.data,
      }
    }
  })

  return res
}

export const getTheTitle = (id, lang) => {
  return services.lang[id - 1].text
}

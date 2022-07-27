import { services } from '../content/services'

const getAllServices = lang => {
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

const getSingleService = (lang, slug) => {
  const data = services[lang].find(el => el.slug === slug)
  return data
}

export { getAllServices, getSingleService }

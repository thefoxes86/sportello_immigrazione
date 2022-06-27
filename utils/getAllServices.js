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

export default getAllServices

import create from 'zustand'
import Flag from '../../components/Flag/Flag'
import Ita from '../../images/ita.svg'

const useStore = create(set => ({
  lang: {
    value: 'ita',
    label: <Flag lang={'IT'} image={<Ita />} />,
  },
  setLanguage: value =>
    set(state => {
      localStorage.setItem('languageSi', value)
      return (state.lang = value)
    }),
}))

export { useStore }

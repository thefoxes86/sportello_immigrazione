import Flag from '../../components/Flag/Flag'
import Ita from '../../images/ita.svg'
import create from 'zustand/vanilla'

const store = create(() => ({
  lang: {
    value: 'ita',
    label: <Flag lang={'IT'} image={<Ita />} />,
  },
  setLanguage: value => setState({ lang: value }),
}))
const { getState, setState, subscribe, destroy } = store

export { store }

import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Logo from '../images/logocolori.svg'
import Earth from '../images/earth.svg'
import IconInfo from '../images/iconinfo.svg'
import React from 'react'
import Orari from '../images/orari.svg'
import Comune from '../images/comune.svg'
import Arci from '../images/arci.svg'
import Flag from '../components/Flag/Flag'
import Select from 'react-select'
import Ita from '../images/ita.svg'
import Eng from '../images/eng.svg'
import Spa from '../images/spa.svg'
import Bra from '../images/bra.svg'
import Rus from '../images/rus.svg'
import Ara from '../images/ara.svg'
import Alb from '../images/alb.svg'
import Cin from '../images/cin.svg'
import PorteAperte from '../images/porteaperte.svg'
import { useStore } from '../utils/zustand'
import Link from 'next/link'

const options = [
  {
    value: 'ita',
    label: <Flag lang={'IT'} image={<Ita />} />,
  },
  { value: 'eng', label: <Flag lang={'EN'} image={<Eng />} /> },

  { value: 'spa', label: <Flag lang={'SP'} image={<Spa />} /> },
  { value: 'rus', label: <Flag lang={'RU'} image={<Rus />} /> },
  { value: 'bra', label: <Flag lang={'BR'} image={<Bra />} /> },
  { value: 'ara', label: <Flag lang={'AR'} image={<Ara />} /> },
  { value: 'alb', label: <Flag lang={'AL'} image={<Alb />} /> },
  { value: 'cin', label: <Flag lang={'CI'} image={<Cin />} /> },
]

const Layout = ({ children }) => {
  const [setLanguage, lang] = useStore(state => [state.setLanguage, state.lang])
  return (
    <div className={styles.container}>
      <Head>
        <title>Sportello Immigrazione ARCI versilia</title>
        <meta
          name="description"
          content="Sportello Immigrazione ARCI versilia"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className="flex items-center justify-center w-screen h-16">
          <div className={styles.square__top}></div>
          <Select
            defaultValue={lang}
            onChange={setLanguage}
            options={options}
            className={styles.select__flags}
          />
        </div>
        <div className="flex justify-center w-screen py-5">
          <Link href="/">
            <Logo />
          </Link>
        </div>
        {children}
        <div className="flex justify-center w-screen py-5">
          <Earth />
        </div>
        <div className="flex justify-center items-center w-screen py-5 flex-col">
          <IconInfo />
          <p className="text-center text-lg font-bold py-1">
            SPORTELLO IMMIGRAZIONE
          </p>
          <p className="text-center text-md py-1">
            Via Sant’Antonio, 34 - 55049 Viareggio (LU)
          </p>
          <p className="text-center text-md py-1">
            <span className="w-100 block">
              sportelloimmigrazione.vg@gmail.com
            </span>
            <span className="w-100 block">arciluccaversilia@pec.it</span>
            <span className="w-100 block">+39 0584 634891</span>
            <span className="w-100 block">+39 371 4244835</span>
          </p>
        </div>
        <div className="flex justify-center items-center w-screen py-5">
          <Orari />
        </div>
        <div className="flex justify-center items-center w-screen py-5">
          <Comune />
        </div>
        <div className="flex justify-center items-center w-screen py-5 gap-3">
          <span>
            <Arci />
          </span>
          <span>
            <PorteAperte />
          </span>
        </div>
        <div className={styles.square__bottom}>
          <p className=" text-white text-center">
            Copyright © 2022 Arci Lucca Versilia All rights reserved - Privacy
            Policy - Terms and Conditions - Credits xdesigners
          </p>
        </div>
      </main>
    </div>
  )
}
export default Layout

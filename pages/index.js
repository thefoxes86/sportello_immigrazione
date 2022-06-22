import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Logo from '../images/logocolori.svg'
import Omini from '../images/omini.svg'
import Earth from '../images/earth.svg'
import IconInfo from '../images/iconinfo.svg'
import React from 'react'
import Service from '../components/Service/Service'
import Orari from '../images/orari.svg'
import Comune from '../images/comune.svg'
import Arci from '../images/arci.svg'
import PorteAperte from '../images/porteaperte.svg'
import { services } from '../content/services'

export default function Home() {
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
        <div className="flex flex-col items-center justify-center w-screen h-16">
          <div className={styles.square__top}></div>
        </div>
        <div className="flex justify-center w-screen py-5">
          <Logo />
        </div>
        <div className="flex justify-center w-screen py-5">
          <Omini />
        </div>
        <h1 className={styles.title}>
          Presso lo Sportello immigrazione potrete disporre dei seguenti
          servizi:
        </h1>
        {services.map(({ icon, text }, index) => (
          <Service key={index} text={text} icon={icon} />
        ))}
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
            sportelloimmigrazione.vg@gmail.com arciluccaversilia@pec.it +39 0584
            634891 +39 371 4244835
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

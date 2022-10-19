import Omini from '../images/omini.svg'
import React, { useState } from 'react'
import Service from '../components/Service/Service'
import { services } from '../content/services'
import Ita from '../images/ita.svg'
import Flag from '../components/Flag/Flag'
import Title from '../components/Title'
import Layout from '../components/Layout'
import { useStore } from '../utils/zustand'

export default function Home() {
  const lang = useStore(state => state.lang)

  return (
    <Layout>
      <div className="flex justify-center w-screen py-5 lg:hidden ">
        <Omini />
      </div>
      <Title lang={lang.value} />
      {services[lang.value].map(({ icon, text, slug }, index) => {
        return (
          <Service
            key={index}
            text={text}
            icon={icon}
            slug={slug}
            lang={lang.value}
          />
        )
      })}
    </Layout>
  )
}

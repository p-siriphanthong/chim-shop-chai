import React, { useState, useEffect } from 'react'
import config from './config'
import getData from './getData'
import Navbar from './components/navbar'
import Banner from './components/banner'
import RegisterSection from './components/sections/register'
import DetailSection from './components/sections/detail'
import TATSection from './components/sections/tat'
import BrandSection from './components/sections/brand'
import Footer from './components/footer'

const App = () => {
  const [data, setData] = useState()

  useEffect(() => {
    getData(config.api, setData)
  }, [])

  return (
    <>
      {/* @todo #3 add loading state */}
      {data ? (
        <>
          <Navbar items={data.navbar.items} />
          <Banner />
          <RegisterSection {...data.register} />
          <DetailSection {...data.detail} />
          <TATSection items={data.tat} />
          <BrandSection items={data.brand} />
          <Footer {...data.footer} />
        </>
      ) : null}
    </>
  )
}

export default App

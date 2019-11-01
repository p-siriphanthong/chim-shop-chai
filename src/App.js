import React, { useState, useEffect } from 'react'
import config from './config'
import getData from './getData'
import Navbar from './components/navbar'
import Banner from './components/banner'
import RegisterSection from './components/sections/register'
import DetailSection from './components/sections/detail'
import TATSection from './components/sections/tat'
import BrandSection from './components/sections/brand'

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
          <RegisterSection
            duration={data.register.duration}
            link={data.register.link}
          />
          <DetailSection
            title={data.detail.title}
            description={data.detail.description}
            conditionTitle={data.detail.conditionTitle}
            condition={data.detail.condition}
          />
          <TATSection items={data.tat} />
          <BrandSection items={data.brand} />
        </>
      ) : null}
    </>
  )
}

export default App

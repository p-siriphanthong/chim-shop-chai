import React, { useState, useEffect } from 'react'
import config from './config'
import Navbar from './components/navbar'

const App = () => {
  const [data, setData] = useState({})

  useEffect(() => {
    fetch(config.api)
      .then(res => res.json())
      .then(setData)
  }, [])

  return <Navbar items={data.navbarItems} />
}

export default App

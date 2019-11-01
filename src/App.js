import React, { useState, useEffect } from 'react'
import config from './config'
import Navbar from './components/navbar'
import Banner from './components/banner'
import RegisterSection from './components/sections/register'

const App = () => {
  const [data, setData] = useState()

  useEffect(() => {
    fetch(config.api)
      .then(res => res.json())
      .then(res =>
        setData({
          register: {
            label:
              'ลงทะเบียน เฟส 2<br>ตั้งแต่วันที่ 24 ต.ค.62 วันละ 2 รอบ เวลา 6.00 และ 18.00 น.<br>(จำกัดจำนวนผู้ลงทะเบียนรอบละ 5 แสนคน รวม 1 ล้านคนต่อวัน)',
            href: 'https://regist.xn--b3caa1e2a7e2b0h2be.com/Register/',
          },
          ...res,
        }),
      )
  }, [])

  return (
    <>
      {/* @todo #3 add loading state */}
      {data ? (
        <>
          <Navbar items={data.navbarItems} />
          <Banner />
          <RegisterSection duration={data.duration} link={data.register} />
        </>
      ) : null}
    </>
  )
}

export default App

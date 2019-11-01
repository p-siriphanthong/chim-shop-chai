import React, { useState, useEffect } from 'react'
import config from './config'
import Navbar from './components/navbar'
import Banner from './components/banner'
import RegisterSection from './components/sections/register'
import DetailSection from './components/sections/detail'
import TATSection from './components/sections/tat'

const App = () => {
  const [data, setData] = useState()

  useEffect(() => {
    fetch(config.api)
      .then(res => res.json())
      .then(res =>
        setData({
          navbar: {
            items: res.navbarItems,
          },
          register: {
            duration: res.duration,
            link: {
              label:
                'ลงทะเบียน เฟส 2<br>ตั้งแต่วันที่ 24 ต.ค.62 วันละ 2 รอบ เวลา 6.00 และ 18.00 น.<br>(จำกัดจำนวนผู้ลงทะเบียนรอบละ 5 แสนคน รวม 1 ล้านคนต่อวัน)',
              href: 'https://regist.xn--b3caa1e2a7e2b0h2be.com/Register/',
            },
          },
          detail: {
            title: 'มาตรการส่งเสริมการบริโภค<br>ในประเทศ “ชิมช้อปใช้”',
            description: res.detail,
            conditionTitle: 'เงื่อนไขการเข้าร่วมมาตรการ',
            condition: res.condition,
          },
          tat: [
            { image: '/images/tat-banner/KTB.png', tel: '021111144' },
            { image: '/images/tat-banner/CGD.png', tel: '022706400' },
            { image: '/images/tat-banner/Hotline.png', tel: '1672' },
          ],
        }),
      )
      .catch(console.log)
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
        </>
      ) : null}
    </>
  )
}

export default App

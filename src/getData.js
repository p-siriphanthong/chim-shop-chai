export default (api, callback) =>
  fetch(api)
    .then(res => res.json())
    .then(res =>
      callback({
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
        brand: [
          {
            image: '/images/brand-logo/MOF.png',
            link: 'https://www.mof.go.th/th/home',
          },
          { image: '/images/brand-logo/FPO.png', link: 'http://www.fpo.go.th' },
          {
            image: '/images/brand-logo/CGD.png',
            link: 'https://www.cgd.go.th',
          },
          {
            image: '/images/brand-logo/Krungthai.png',
            link: 'https://www.newcb.ktb.co.th',
          },
          {
            image: '/images/brand-logo/MOTS.png',
            link: 'https://www.mots.go.th',
          },
          {
            image: '/images/brand-logo/TAT.png',
            link: 'https://thai.tourismthailand.org',
          },
        ],
        footer: {
          contact: [
            {
              title: 'ข้อมูลลงทะเบียนประชาชน',
              detail:
                'การรับสิทธิ การใช้งานแอปพลิเคชั่น <span class="nowrap">“เป๋าตัง”</span> และ <span class="nowrap">“ถุงเงิน”</span><br>ติดต่อ ชิมช้อปใช้ Call Center by Krungthai โทร. <a class="ml-1" href="tel:021111144"><span class="nowrap">0 2111 1144</span></a>',
            },
            {
              title: 'ข้อมูลลงทะเบียนประชาชน',
              detail:
                'เงื่อนไขและวิธีการเข้าร่วมมาตรการฯ<br>ติดต่อ โทร. <a class="ml-1" href="tel:022706400"><span class="nowrap">0 2270 6400 กด 7</span></a>',
            },
            {
              title: 'ข้อมูลเที่ยวชิมช้อปใช้',
              detail:
                'ติดต่อ ททท.<br>โทร <a class="ml-1" href="tel:1672"><span>1672</span></a>',
            },
          ],
          link: [
            {
              title: 'ลงทะเบียนเข้าร่วมมาตรการ',
              href: 'https://regist.xn--b3caa1e2a7e2b0h2be.com/Register/',
            },
            {
              title: 'ขั้นตอนการเข้าร่วมทั้งหมด',
              href: 'https://www2.xn--b3caa1e2a7e2b0h2be.com/howto-register',
            },
            {
              title: 'รายชื่อร้านค้าที่เข้าร่วมรายการ',
              href:
                'https://www2.xn--b3caa1e2a7e2b0h2be.com/thung-ngern-shop-province',
            },
          ],
          copyright: '2003-2019',
        },
      }),
    )
    .catch(console.log)

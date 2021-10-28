import React from 'react'
import image1 from '../../img/materials/1.jpg'
import image2 from '../../img/materials/2.jpg'
import image3 from '../../img/materials/3.jpg'
import image4 from '../../img/materials/4.jpg'
import image5 from '../../img/materials/5.jpg'
import image6 from '../../img/materials/6.jpg'
import image7 from '../../img/materials/7.jpg'
import image8 from '../../img/materials/8.jpg'
import image9 from '../../img/materials/9.jpg'
import image10 from '../../img/materials/10.jpg'
import image11 from '../../img/materials/11.jpg'
import image12 from '../../img/materials/WhatsApp Image 2021-09-24 at 22.20.12.jpeg'
import image13 from '../../img/materials/WhatsApp Image 2021-09-24 at 22.20.09.jpeg'
import './index.scss'
// import MySlider from '../../UI/mySlider'

const imagArray = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13]

// export default function Matrials() {
//   return(
//     <section className='Materials'>
//       {/* <MySlider imagArray={imagArray} /> */}
//       <h2>За красотой – к нам в салон!</h2>
//       <p>Мы всегда готовы к предоставлению самых качественных услуг в индустрии красоты.</p>
//       <p>Студия <span>love is</span> работает только на качественных материалах, таких как <span>LUXIO</span> – это более щадящие средства для цветного покрытия ногтей, в которых нет вредных смол, формальдегидов и растворителей.</p>
//       <p>А так же мастера нашего салона пользуются фирмой <span>EMI</span> – международный бренд модного салонного маникюра. Emi выбирают звезды, лидеры нейл-индустрии и стильные женщины в 33 странах мира.</p>
//       <p>Все средства завоевали популярность благодаря гипоаллергенным свойствам и отсутствию необходимости спиливать покрытие фрезой.</p>
//       <p>Будьте красивыми при любых условиях вместе с <span>love is</span>.</p>
//       <div className='Materials__wrapper'>
//         {imagArray.map((image, index) => {
//           return(
//             <div key={index}>
//               <img src={image} alt="asad" />
//             </div>
//           )
//         })}
//       </div>
//     </section>
//   )
// }

export default class Matrials extends React.Component {
  render() {
    return(
      <section className='Materials'>
        {/* <MySlider imagArray={imagArray} /> */}
        <h1>За красотой – к нам в салон!</h1>
        <p>Мы всегда готовы к предоставлению самых качественных услуг в индустрии красоты.</p>
        <p>Студия <span>love is</span> работает только на качественных материалах, таких как <span>LUXIO</span> – это более щадящие средства для цветного покрытия ногтей, в которых нет вредных смол, формальдегидов и растворителей.</p>
        <p>А так же мастера нашего салона пользуются фирмой <span>EMI</span> – международный бренд модного салонного маникюра. Emi выбирают звезды, лидеры нейл-индустрии и стильные женщины в 33 странах мира.</p>
        <p>Все средства завоевали популярность благодаря гипоаллергенным свойствам и отсутствию необходимости спиливать покрытие фрезой.</p>
        <p>Будьте красивыми при любых условиях вместе с <span>love is</span>.</p>
        <div className='Materials__wrapper'>
          {imagArray.map((image, index) => {
            return(
              <div key={index}>
                <img src={image} alt="asad" />
              </div>
            )
          })}
        </div>
      </section>
    )
  }
}
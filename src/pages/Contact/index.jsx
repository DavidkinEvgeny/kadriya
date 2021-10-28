import React from 'react'
import { FaTelegramPlane, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'
import './index.scss'
import town from '../../img/Screenshot_1.png'

// export default function Contact() {
//   return(
//     <div>
//       <section className='Contact'>
//         <h1>Контакты</h1>
//         <div className='Contact__wrapper'>
//           <div>
//             <p>Адрес: Измайловский бульвар 43, 3 этаж, <span>офис 314</span></p>
//             <p>Телефон: +7 (963) 697-13-13</p>
//             <p>WhatsApp: <a href="https://wa.me/+79636971313" target="blank"><FaWhatsapp /></a></p>
//             <p>Telegram: <a href="/" target="blank"><FaTelegramPlane /></a></p>
//             <p>Instagramm: <a href="https://www.instagram.com/loveis.nail/" target="blank"><FaInstagram /></a></p>
//             <p>E-mail: <a href="/"><FiMail /></a></p>
//           </div>
//           <div>
//           <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2242.8656642087312!2d37.79639403587935!3d55.79557051481899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b534cdd3ce59bd%3A0xa4a2c85cb9c7e379!2z0JjQt9C80LDQudC70L7QstGB0LrQuNC5INCxLdGALCA0Mywg0JzQvtGB0LrQstCwLCAxMDUyNjQ!5e0!3m2!1sru!2sru!4v1631555972380!5m2!1sru!2sru" title="map"></iframe>
//           </div>
//           <div>
//             <img src={town} alt="здание" /> 
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }

export default class Contact extends React.Component {
  render() {
    return(
      <div>
        <section className='Contact'>
          <h1>Контакты</h1>
          <div className='Contact__wrapper'>
            <div>
              <p>Адрес: Измайловский бульвар 43, 3 этаж, <span>офис 314</span></p>
              <p>Телефон: +7 (963) 697-13-13</p>
              <p>WhatsApp: <a href="https://wa.me/+79636971313" target="blank"><FaWhatsapp /></a></p>
              <p>Telegram: <a href="/" target="blank"><FaTelegramPlane /></a></p>
              <p>Instagramm: <a href="https://www.instagram.com/loveis.nail/" target="blank"><FaInstagram /></a></p>
              <p>E-mail: <a href="mailto:kadriya0709@mail.ru"><FiMail /></a></p>
            </div>
            <div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2242.8656642087312!2d37.79639403587935!3d55.79557051481899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b534cdd3ce59bd%3A0xa4a2c85cb9c7e379!2z0JjQt9C80LDQudC70L7QstGB0LrQuNC5INCxLdGALCA0Mywg0JzQvtGB0LrQstCwLCAxMDUyNjQ!5e0!3m2!1sru!2sru!4v1631555972380!5m2!1sru!2sru" title="map"></iframe>
            </div>
            <div>
              <img src={town} alt="здание" /> 
            </div>
          </div>
        </section>
      </div>
    )
  }
}

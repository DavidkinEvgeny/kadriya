import './index.scss'
import { FaTelegramPlane, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'
import Phone from '../Phone'

export default function Social({block}) {
  
  if (block === 'header') {
    return(
      <div className={['Social', 'Social__header'].join(' ')}>
        <a href="https://wa.me/+79636971313" target="blank"><FaWhatsapp /></a>
        <a href="/" target="blank"><FaTelegramPlane /></a>
        <a href="https://www.instagram.com/loveis.nail/" target="blank"><FaInstagram /></a>
        <a href="/"><FiMail /></a>
        <Phone />
      </div>
    )
  } else {
    return(
      <div className={['Social', 'Social__footer'].join(' ')}>
        <a href="https://wa.me/+79636971313" target="blank"><FaWhatsapp /></a>
        <a href="/" target="blank"><FaTelegramPlane /></a>
        <a href="https://www.instagram.com/loveis.nail/" target="blank"><FaInstagram /></a>
        <a href="/"><FiMail /></a>
        <Phone />
      </div>
    )
  }

}
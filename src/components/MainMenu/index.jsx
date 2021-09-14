import './index.scss'
import {Link} from 'react-router-dom'


export default function MainMenu() {
  return(
    <ul className='MainMenu'>
      <li><Link to="/">Главная</Link></li>
      <li><Link to="/price">Стоимость услуг</Link></li>
      <li><Link to="/contact">Контакты</Link></li>
    </ul>
  )
}
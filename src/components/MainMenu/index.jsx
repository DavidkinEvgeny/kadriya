import './index.scss'
import {NavLink} from 'react-router-dom'
import { AiOutlineHome, AiOutlineContacts, AiOutlineDollar, AiFillIdcard } from 'react-icons/ai'
import { FaFlask } from 'react-icons/fa'
import { GiTeacher } from 'react-icons/gi'


export default function MainMenu() {
  return(
    <ul className='MainMenu'>
      <li><NavLink to="/" activeClassName="selected" exact ><AiOutlineHome />Главная</NavLink></li>
      <li><NavLink to="/price" activeClassName="selected"><AiOutlineDollar />Стоимость услуг</NavLink></li>
      <li><NavLink to="/materials" activeClassName="selected"><FaFlask />Материалы</NavLink></li>
      <li><NavLink to="/teach" activeClassName="selected"><GiTeacher />Обучение</NavLink></li>
      <li><NavLink to="/contact" activeClassName="selected"><AiOutlineContacts />Контакты</NavLink></li>
      <li><NavLink to="/about" activeClassName="selected"><AiFillIdcard />О нас</NavLink></li>
    </ul>
  )
}
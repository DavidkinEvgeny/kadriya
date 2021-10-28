import React from 'react'
import './index.scss'
import imgStock from '../../img/stock.png' 

const stock = [
  {id: 1, description: 'При обслуживании постоянных клиентов - доп. услуга в подарок!'},
  {id: 2, description: 'При комплексном обслуживании маникюра - дизайн в подарок!'},
  {id: 3, description: 'При депиляции всех зон - одна зона в бесплатно!'},
  {id: 4, description: 'При обслуживании перманентом более двух зон скидка 1000 ₽!'},
]

export default function Stock() {
  return (
    <div className='Stock'>
      <ul className='Stock__wrapper'>
        {stock.map(s => {
          return(
            <li key={s.id} className='Stock__item'>
              <img src={imgStock} alt="Акция" />
              <p>{s.description}</p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

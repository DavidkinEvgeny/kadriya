import React, { useState } from 'react'

export default function Item({service, price}) {
  const [classes, setClasses] = useState(['Services__description'])
  const [btnName, setBtnName] = useState('Подробнее')

  function Toggle() {
    if (classes.length === 1){
      setClasses([...classes, 'Services__activate'])
      setBtnName('Скрыть')
    } else {
      setClasses(['Services__description'])
      setBtnName('Подробнее')
    }
  }
  if (price) {
    return (
      <li className='Price__item'>
        <h4>{service.name}</h4>
        <div>
          <p >{service.description}</p>
          <p >Стоимость: {service.price}</p>
        </div>
      </li>
  )
  } else {
    return (
        <li className='Services__item'>
          <h4>{service.name}</h4>
          <div>
            <p className={classes.join(' ')}>{service.description}</p>
            <p onClick={Toggle} className='Services__btn'>{btnName}</p>
          </div>
        </li>
    )
  }
}

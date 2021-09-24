import React from 'react'

export default function Item({service}) {

  return(
    <li key={service.id} className='Services__item'>
      <h4>{service.name}</h4>
      <p>{service.price} ₽</p>
    </li>
  )
}

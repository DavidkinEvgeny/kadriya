import { useState } from 'react';
import Item from '../Item';


export default function Catalog({services, name}) {
  const [myClass, setMyClass] = useState(['Services__list'])
  const [nameBtn, setNameBtn] = useState('Подробнее')

  function addClass() {
    if (myClass.length === 1) {
      setMyClass(['Services__list', 'Services__list-active'])
      setNameBtn('Скрыть')
    } else {
      setMyClass(['Services__list'])
      setNameBtn('Подробнее')
    }
  }
  return(
    <section >
      <h3>{name}</h3>
      {services.map((service) => {
        return(
          <ul className={myClass} key={service.id}>
            <Item key={service.id} service={service} />
          </ul>
        )
      })}
      <button className='Services__btn' onClick={() => addClass()}>{nameBtn}</button>
    </section>
  )
}
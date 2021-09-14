import './index.scss'
import { SiMoscowmetro } from 'react-icons/si'
import { RiShieldCheckLine, Ri24HoursFill } from 'react-icons/ri'
import { CgCoffee } from 'react-icons/cg'

export default function Benefits() {
  return(
    <section className='Benefits'>
      <div>
        <CgCoffee />
        <p>Приятная атмосфера и радушное отношение</p>
      </div>
      <div>
        <SiMoscowmetro />
        <p>В 5 минутах от метро</p>
      </div>
      <div>
        <RiShieldCheckLine />
        <p>До 5 дней гарантии</p>
      </div>
      <div>
        <Ri24HoursFill />
        <p>Запись 24 часа в сутки</p>
      </div>
    </section>
  )
}
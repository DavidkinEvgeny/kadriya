import './index.scss'
import {shugaring, brovi, resnicy, pedikur, nogti, gel, manikur, makiyaz, uhod, additionally} from './../../state/services.js';
import Catalog from './Catalog';


export default function Services() {
  return(
    <section className='Services'>
      <h2 className='Services__title'>Предоставляемые услуги</h2>
      <div className='Services__wrapper'>
        <Catalog services={resnicy} name={'Наращивание ресниц'} />
        <Catalog services={pedikur} name={'Педикюр'} />
        <Catalog services={nogti} name={'Наращивание ногтей'} />
        <Catalog services={uhod} name={'Уходовые процедуры'} />
        <Catalog services={gel} name={'Покрытие'} />
        <Catalog services={manikur} name={'Маникюр'} />
        <Catalog services={shugaring} name={'Шугаринг/Депиляция/Воск'} />
        {/* <Catalog services={depilyaciya} name={'Депиляция'} /> */}
        <Catalog services={brovi} name={'Архитектура бровей'} />
        <Catalog services={makiyaz} name={'Перманентный макияж'} />
        <Catalog services={additionally} name={'Дополнительно'} />
      </div>
    </section>
  )
}
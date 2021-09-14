import './index.scss'
import {shugaring, depilyaciya, brovi, resnicy, pedikur, nogti, gel, manikur, makiyaz, uhod} from './../../state/services.js';
import Catalog from './Catalog';


export default function Services() {

  return(
    <section className='Services'>
      <h2 className='Services__title'>Предоставляемые услуги</h2>
      <div className='Services__wrapper'>
        <Catalog services={resnicy} name={'Наращивание ресниц'} price={false} nameClass={'Services__items'} />
        <Catalog services={pedikur} name={'Педикюр'} price={false} nameClass={'Services__items'} />
        <Catalog services={nogti} name={'Наращивание ногтей'} price={false} nameClass={'Services__items'} />
        <Catalog services={uhod} name={'Уходовые процедуры'} price={false} nameClass={'Services__items'} />
        <Catalog services={gel} name={'Покрытие гель-лак'} price={false} nameClass={'Services__items'} />
        <Catalog services={manikur} name={'Маникюр'} price={false} nameClass={'Services__items'} />
        <Catalog services={shugaring} name={'Шугаринг'} price={false} nameClass={'Services__items'} />
        <Catalog services={depilyaciya} name={'Депиляция'} price={false} nameClass={'Services__items'} />
        <Catalog services={brovi} name={'Архитектура бровей'} price={false} nameClass={'Services__items'} />
        <Catalog services={makiyaz} name={'Перманентный макияж'} price={false} nameClass={'Services__items'} />
      </div>
    </section>
  )
}
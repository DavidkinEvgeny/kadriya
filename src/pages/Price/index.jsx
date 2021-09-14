import React from 'react'
import Catalog from '../../components/Services/Catalog/index.js'
import {shugaring, depilyaciya, brovi, resnicy, pedikur, nogti, gel, manikur, makiyaz, uhod} from './../../state/services.js'
import './index.scss'

export default function Price() {

  return(
    <div>
      <section className="Price">
        <h1>Стоимость услуг</h1>
        <div className="Price__wrapper">
          <Catalog services={resnicy} name={'Наращивание ресниц'} price={true} nameClass='Price__items' />
          <Catalog services={pedikur} name={'Педикюр'} price={true} nameClass='Price__items' />
          <Catalog services={nogti} name={'Наращивание ногтей'} price={true} nameClass='Price__items' />
          <Catalog services={manikur} name={'Маникюр'} price={true} nameClass='Price__items' />
          <Catalog services={uhod} name={'Уходовые процедуры'} price={true} nameClass='Price__items' />
          <Catalog services={gel} name={'Покрытие гель-лак'} price={true} nameClass='Price__items' />
          <Catalog services={depilyaciya} name={'Депиляция'} price={true} nameClass='Price__items' />
          <Catalog services={brovi} name={'Архитектура бровей'} price={true} nameClass='Price__items' />
          <Catalog services={shugaring} name={'Шугаринг'} price={true} nameClass='Price__items' />
          <Catalog services={makiyaz} name={'Перманентный макияж'} price={true} nameClass='Price__items' />
        </div>
      </section>
    </div>
  )
}

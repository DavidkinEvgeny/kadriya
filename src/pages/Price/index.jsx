import React from 'react'
import Catalog from '../../components/Services/Catalog/index.js'
import {shugaring, brovi, resnicy, pedikur, nogti, gel, manikur, makiyaz, uhod, additionally} from './../../state/services.js'
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
          <Catalog services={additionally} name={'Дополнительно'} price={true} nameClass='Price__items' />
          <Catalog services={brovi} name={'Архитектура бровей'} price={true} nameClass='Price__items' />
          <Catalog services={shugaring} name={'Шугаринг'} price={true} nameClass='Price__items' />
          <Catalog services={makiyaz} name={'Перманентный макияж'} price={true} nameClass='Price__items' />
        </div>
        <h2>Аппаратный зал</h2>
        <p><span>Кавитация</span> - это метод ультразвуковой беоперационной липосакции. Через датчики аппарата проходит мощная ультрозвуковая волна, которая разрушает жировые клетки. При этом ультразвук разрушает клеточную мембрану, жир под давлением превращается в жидкость и выводится из организма через нормальный метаболический процесс.</p>
        <p><span>Rf-лифтинг (лица и тела)</span> - это уникальная методика безоперационного омоложения кожи с помощью воздействия электрической радиоволны. Такая процедура усиливает кровообращение кожи, активируются обменные процессы и дыхание клеток, улучшается жизнеобеспечение кожи, её цвет. Эффект - мгровенная подтяжка кожи лица, шеи, декольте, а также тела.</p>
        <p><span>Ваккумный массаж</span> - процедура, при которой при помощи специального аппарата происходит нагнетание и отсасывание воздуха на определенные участки тела. Благодаря перепаду давлений прорабатываются глубокие слои, усиливаются обменные процессы, кровоток и лимфоток, а ткани активно освобождаются от токсических веществ. В результате сжигается жир и расщепляются целлюлитные клетки.</p>
      </section>
    </div>
  )
}

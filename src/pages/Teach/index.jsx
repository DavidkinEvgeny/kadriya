import React, { Component } from 'react'
import './index.scss'

class Teach extends Component {
  render() {
    return (
      <div className='Teach'>
        <h1>Индивидуальное обучение</h1>
        <p>Я практикующий beauty-мастер с 10-ти летним непрерывным стажем и большим опытом в сфере.</p>
        <p>Помогу пройти путь от новичка до профессионала и получить постоянных клиентов.</p>
        <p>По окончанию курса Вы получите сертификат который котируется в beauty-сфере.</p>
        <ul>
          <h2>Наши курсы:</h2>
          <li>
            <h3>Маникюр</h3>
            <p>Современный маникюр давно вышел за пределы окрашивания лаком и полировки.</p>
            <p>Наращивание, укрепление кератином и покрытие гелем, инкрустация и кракелюр – с каждым годом в культуре ухода за руками появляются новые тренды.</p>
          </li>
          <li>
            <h3>Наращивание ресниц</h3>
            <p>Лицо – первое, на что окружающие обращают внимание.</p>
            <p>Достигнуть выразительного взгляда можно, если подчеркнуть красоту ресниц и плавные линии бровей.</p>
          </li>
          <li>
            <h3>Перманентный макияж</h3>
            <p>Перманентный макияж, как одна из косметических услуг, с каждым годом становится всё популярнее.</p>
            <p>А вместе с этим, растёт и востребованность в высококвалифицированных специалистах по татуажу и перманентному макияжу.</p>
          </li>
        </ul>
      </div>
    );
  }
}

export default Teach;
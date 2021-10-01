import React from 'react'
import About from '../../components/About'
import Sertificate from '../../img/1.jpg'
import './index.scss'

export default function AboutPage() {
  return (
    <div className='AboutPage'>
      <About />
      <img src={Sertificate} alt='серификаты' />
    </div>
  )
}

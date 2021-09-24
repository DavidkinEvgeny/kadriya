import React from 'react'
import image1 from '../../img/materials/1.jpg'
import image2 from '../../img/materials/2.jpg'
import image3 from '../../img/materials/3.jpg'
import image4 from '../../img/materials/4.jpg'
import image5 from '../../img/materials/5.jpg'
import image6 from '../../img/materials/6.jpg'
import image7 from '../../img/materials/7.jpg'
import image8 from '../../img/materials/8.jpg'
import image9 from '../../img/materials/9.jpg'
import image10 from '../../img/materials/10.jpg'
import image11 from '../../img/materials/11.jpg'
import './index.scss'
import MySlider from '../../UI/mySlider'

const imagArray = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11]

export default function Matrials() {
  return(
    <section className='Materials'>
      <MySlider imagArray={imagArray} />
    </section>
  )
}

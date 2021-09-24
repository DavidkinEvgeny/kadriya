import React from 'react'
import './index.scss'


export default function Modal({active, setActive, children, image}) {

  return (
    <div >
       <div className={active ? 'Modal active' : 'Modal'} onClick={() => {setActive(false)}} >
        <div className="Modal__content" onClick={e => e.stopPropagation()} >
          
        </div>
      </div>
      <img src={image} alt='asd' onClick={() => setActive(true)} />
    </div>
  )
}

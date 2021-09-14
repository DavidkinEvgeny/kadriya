import React from 'react'
import About from '../../components/About'
import Album from '../../components/Album'
import Benefits from '../../components/Benefits'
import Services from '../../components/Services'


export default function Home() {
  return(
    <div>
      <About />
      <Benefits />
      <Services />
      <Album />
    </div>
  )
}

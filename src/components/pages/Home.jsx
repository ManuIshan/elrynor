import React from 'react'
import Homehero1 from '../home/Homehero1'
import HomeHero2 from '../home/Homehero2'
import Homehero3 from '../home/Homehero3'
import Homehero4 from '../home/Homehero4'
import Homehero5 from '../home/Homehero5'
import Homehero6 from '../home/Homehero6'
import FAQ from '../home/Faq'

function Home() {
  return (
    <div>
      <Homehero1/>
      <HomeHero2/>
      <Homehero3/>   {/* REMOVE ID */}
      <Homehero4/>
      <Homehero5/>
      <Homehero6/>  
      <FAQ/>
    </div>
  )
}

export default Home

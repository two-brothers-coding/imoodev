import React from 'react'
import Hero from '../../components/hero/Hero'
import Work from '../../components/what-Imoodev/Work'
import Who from '../../components/who-is/Who'
import Customer from '../../components/customer/Customer'


function Home() {
  return (
    <div>
      <Hero/>
      <Work/>
      <Who/>
      <Customer/>
    </div>
  )
}

export default Home
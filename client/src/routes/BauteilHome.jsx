import React from 'react'
import BauteilInfo from '../components/BauteilInfo'
import Bottom from '../components/Bottom'
import Navbar from '../components/Navbar'
import BauteilOptionen from '../components/BauteilOptionen'


const BauteilHome = () => {
  return (
      <div className="container">
      <div><Navbar/></div>
      <div>
        <div><BauteilInfo/></div>
        <div><BauteilOptionen /></div>
      </div>
      <div><Bottom/></div>
        
    </div>
  )
}

export default BauteilHome
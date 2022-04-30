import React from 'react'
import Navbar from './nav/Navbar'

export default function MainLayout(props) {
  return (

    <div>
      {/* nav */}
      <Navbar/>

      {props.children}

      {/* footer */}

    </div>
  )
}

import React from 'react'
import "./ShadeButton.css";


export default function ShadeButton(props) {

  return (
    <button className={"ShadeButton " + (props.isActive && "ShadeButton-active")}>
      {props.children}

    </button>
  )
}

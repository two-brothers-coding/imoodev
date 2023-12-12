import React from 'react'
import './btn.scss'
  function Btn({text,active}) {
  return (
    <div >
        <button className={active ? "navbar-active" : "navbar-btn"} >{text}</button>
    </div>
  )
}

export default Btn
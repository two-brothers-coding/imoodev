import React from 'react'
import './btn.scss'
  function Btn({text}) {
  return (
    <div >
        <button className='navbar-btn'>{text}</button>
    </div>
  )
}

export default Btn
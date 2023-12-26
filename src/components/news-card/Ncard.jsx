import React from 'react'
import "./ncard.scss"
function Ncard({text,date,post,img,title}) {
  return (
    <div className='newscard'>
         <img className='img' src={img} alt="link" />
         <div className="date">
        <h2>{date}</h2>
        <h4>{post}</h4>
        </div>
        <h3>{title}</h3>
        <h5>{text}</h5> 
    </div>
  )
}

export default Ncard
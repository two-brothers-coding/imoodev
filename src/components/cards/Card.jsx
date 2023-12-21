import React from 'react'
import "./card.scss"
function Card({title,text,img,}) {
  return (
    <div className='text-card'>
     <img src={img}  />
    
     <h2>{title}</h2>
     <h4>{text}</h4>
    </div>
  )
}

export default Card
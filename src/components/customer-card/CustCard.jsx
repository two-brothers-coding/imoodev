import React from 'react'
import "./custCard.scss"
function CustCard({number,title,text,img,eclipse}) {
  return (
    <div className='cusCard'>
      <h1>{number}</h1>
      <h3>{title}</h3>
      <h2>{text}</h2>
      <img src={img} alt="link" />
      
      </div>
  )
}

export default CustCard
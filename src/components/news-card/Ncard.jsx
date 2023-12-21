import React from 'react'

function Ncard({text,date,post,img,title}) {
  return (
    <div>
        <h3>{title}</h3>
        <div className="date">
        <h2>{text}</h2>
        <h4>{date}</h4>
        </div>
        <h5>{post}</h5>
        <img  src={img} alt="link" />
        
    </div>
  )
}

export default Ncard
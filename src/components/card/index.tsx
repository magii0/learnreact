import React from 'react'
import './style.css'
type CardProps = {
    title: string,
    paragraph: string
  }
const Card = ({ title, paragraph }: CardProps) => <div className="col-sm">
    <h2 className="title">{ title }</h2>
    <p className="para">
      { paragraph }
    </p>
  </div>


export default Card
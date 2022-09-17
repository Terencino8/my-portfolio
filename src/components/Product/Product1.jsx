import React from 'react'
import "./Product.css"
import model from "../../img/Pmodel.png"


const Product = () => {
  return (
    <div className='p'>
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>
      
        <img src={model} alt=""  className='p-img one'/>
      
    </div>
  )
}

export default Product





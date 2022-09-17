import React from 'react'
import "./Product.css"
import Bmockup from "../../img/Bmockup.png"




const Product = () => {
  return (
    <div className='p'>
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>
      <img src={Bmockup} alt="" className='p-img four'/>

    </div>
  )
}

export default Product





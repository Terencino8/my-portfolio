import React from 'react'
import "./Contact.css"
import Phone from "../../img/Phone.png"
import Email from "../../img/Mail.png"
import Address from "../../img/Address.png"

const Contact = () => {
  return (
    <div className='c'>
        <div className="c-bg"></div>
        <div className="c-wrapper">
            <div className="c-left">
                <h1 className="c-title">Let's Discuss your project</h1>
                <div className="c-info">
                    <div className="c-info-item">
                        {/* Phone Icone */}
                        <img 
                        src={Phone}
                        alt="" 
                        className="c-icon" />
                        +234 708 542 9640
                    </div>
                    
                    <div className="c-info-item">
                        {/* Mail Icon */}
                        <img 
                        src={Email}
                        alt="" 
                        className="c-icon" />
                        Terenceonyekachi@gmail.com
                    </div>

                    <div className="c-info-item">
                        {/* Address Icon */}
                        <img 
                        src={Address}
                        alt="" 
                        className="c-icon" />
                        @27 Mafoluku Road Oshodi Lagos Nigeris
                    </div>
                   
                </div>
            </div>
            <div className="c-right">
                <p className="c-desc">
                    <b>What's your story?</b>  Gert in touch. Always freelancing if the right project comes along. me. 
                </p>

                {/* Contact form To send mail  One*/}
                <form action="">
                    <input type="text" placeholder="Name" name="user_name" />
                    <input type="text" placeholder="subject" name="user_suject" />
                    <input type="text" placeholder="Email" name="user_email" />

                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact
// For the mailing system
import React, { useContext, useRef, useState } from 'react';
import "./Contact.css";
import Phone from "../../img/Phone.png";
import Email from "../../img/Mail.png";
import Address from "../../img/Address.png";
import emailjs from '@emailjs/browser';
import { ThemeContext } from '../../context';



const Contact = () => {

    // For the mailing system formRef
        const formRef = useRef();
        const [done, setDone] = useState(false)
        const theme = useContext(ThemeContext);
        const darkMode = theme.state.darkMode;

    // handleSubmit function in the form 
        const handleSubmit = (e) =>{
            e.preventDefault();
            emailjs.sendForm('service_x2l9jm8', 'template_jlgdauk', formRef.current, 'nHhlasD8glUyXtoW0')
            .then((result) => {
                console.log(result.text);
                setDone(true)
            }, (error) => {
                console.log(error.text);
            });
        };
            
        


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
                    <b>What's your story?</b>  Get in touch. Always freelancing if the right project comes along. me. 
                </p>

                {/* Contact form To send mail  One*/}
                <form ref={formRef} onSubmit={handleSubmit}>
                    <input style={{backgroundColor: darkMode && "#333", color: darkMode && "white" }} type="text" placeholder="Name" name="user_name" />
                    <input style={{backgroundColor: darkMode && "#333", color: darkMode && "white" }} type="text" placeholder="Subject" name="user_subject" />
                    <input style={{backgroundColor: darkMode && "#333", color: darkMode && "white" }} type="text" placeholder="Email" name="user_email" />
                    <textarea style={{backgroundColor: darkMode && "#333", color: darkMode && "white" }} rows="10" placeholder="Message" name="message"></textarea>
                    <button>Submit</button>
                    {done && "Thank You For Reaching out I will Get in touch with You soonest"}
                </form>
            </div>

        </div>


       
    </div>
      
  )
}

export default Contact
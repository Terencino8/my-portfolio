import "./contact.css"
import Phone from "../../img/Phone.png"
import Email from "../../img/Mail.png"
import Address from "../../img/Address.png"
import { useRef } from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {
    const formRef = useRef();
    
    
    // link mail to recive messages frm site
    const handleSubmit =  (e)=>{
        e.preventDefault();
        emailjs.sendForm('service_1uxj46c', 'template_rh2umfx', formRef.current, 'bvnhNbclyb8Ka9L3c')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
         
    }
  return (
    <div className='c'>
        <div className="c-bg"></div>
        <div className="c-wrapper">
            <div className="c-left">
                <h1 className="c-title">Let's discuss your project</h1>
                <div className="c-info">
                    <div className="c-info-item">
                        <img 
                            src={Phone} 
                            alt="" 
                            className="c-icon"
                        />
                        +234 708 542 9640
                    </div>

                    <div className="c-info-item">
                        <img 
                            src={Email} 
                            alt="" 
                            className="c-icon"
                        />
                        Terencino8@gmail.com
                    </div>

                    <div className="c-info-item">
                        <img 
                            src={Address} 
                            alt="" 
                            className="c-icon"
                        />
                       27 Mafolukwu Road, Oshodi, Lagos Nigeria
                    </div>
                </div>
            </div>
            <div className="c-right">
                <div className="c-desc">
                    <b>What's your story?</b> Get in touch. Always available for freelancing 
                    if the right project comes along. me.
                </div>
                <form ref={formRef} onSubmit={handleSubmit}>
                    <input type="text" placeholder="Name" name="user_name"/>
                    <input type="text" placeholder="subject" name="user_subject"/>
                    <input type="text" placeholder="Email" name="user_email"/>
                    <textarea cols="30" rows="10" placeholder="message" name="messsage"></textarea>
                    <button>Submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact
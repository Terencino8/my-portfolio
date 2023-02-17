import "./intro.css"
import Me from "../../img/me.jpg"
import cv from "../../img/tcv.pdf"

const Intro = () => {
  return (
    <div className='i'>
        <div className="i-left">
            <div className="i-left-wrapper">
                <h2 className="i-intro">Hello, My Name is</h2>
                <h1 className="i-name"> Terence Onyekachi</h1>
                <div className="i-title">
                    <div className="i-title-wrapper">
                        <div className="i-title-item">Web Developer</div>
                        <div className="i-title-item">Product Designer</div>
                        <div className="i-title-item">UI/UX Designer</div>
                        <div className="i-title-item">Hardware Engineer </div>
                       <div className="i-title-item">Network Engineer </div>

                    </div>
                </div>
                <div className="i-desc">
                    I design and develop services for customers of all sizes, 
                    specializing in creating stylish, modern websites, web services and 
                    online store.
                    <div className="i-slogan">Lets make your Imagination Become a Reality</div>
                </div>

                <a href={cv} className="i-cv">
                    <button >Check Out My CV</button>
                </a>


            </div>

            
        </div>
        <div className="i-right">
        <div className="i-bg"></div>
            <div className="i-img-bor">
                <img src={Me} alt="" className="i-img" />
            </div>
        </div>
    </div>
  )
}

export default Intro


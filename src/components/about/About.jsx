import "./about.css"
import tbw2 from "../../img/aboutImg.jpg";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
         <img src={tbw2} alt="" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me
          <hr />
        </h1>
        
        
        <div className="a-desc-wrapper">
          <p className="a-sub-one">
            <h3>My Experiencies</h3>
            I.t. Support Engineer with Experience in the use of Figma in creating responsive User Interfaces, Network engineering, configuration and administration skills, Proficient in web development using HTML CSS and Javascript Excellent client relation skills, troubleshooting and repairs of computer hardware, Excellent communication skills.
            <br />
            
            <hr />
            <br />
            <h3>Extra Activities</h3>
            <ul>
              <li>Basketballing</li>
              <li>Singing</li>
              <li>programming</li>
            </ul>

          </p>
        </div>
      </div>
    </div>
  )
}

export default About

import "./about.css"
import tbw from "../../img/tbw.jpg"

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
         <img src={tbw} alt="" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me
          <hr />
        </h1>
        
        
        <div className="a-desc-wrapper">
          <p className="a-sub">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Cumque et unde quia. 
          </p>
          <p className="a-desc">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Natus excepturi dignissimos hic error, officiis,
              quo non voluptatem ea, aperiam reprehenderit perspiciatis 
              architecto inventore! 
            At illo distinctio totam, minima quasi et?
          </p>
        </div>
      </div>
    </div>
  )
}

export default About

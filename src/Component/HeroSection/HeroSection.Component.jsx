import './HeroSection.styles.css'

const HeroSection = (props) => {
    return(
    <div className="heroSection">
       <div className="container"> 
        <div className="box1">
                <h3>Confirmed</h3>
                <h1>29,12,48,00</h1>
        </div>
        <div className="box2">
            <h3>Active</h3>
            <h1>{props.data}</h1>
       </div>
        <div className="box3">
           <h3>Recovered</h3>
          <h1>9,12,48,00</h1>
      </div>
        </div>
       
    </div>
    )
} 

export default HeroSection;
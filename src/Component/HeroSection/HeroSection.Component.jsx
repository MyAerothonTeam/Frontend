import './HeroSection.styles.css'

const HeroSection = () => {
    return(
    <div className="heroSection">

       <div class="container"> 
        <div class="box1">
                <h3>Confirmed</h3>
                <h1>29,12,48,00</h1>
        </div>
        <div class="box2">
            <h3>Active</h3>
                <h1>20,13,48,00</h1>
       </div>
        <div class="box3">
           <h3>Recovered</h3>
          <h1>9,12,48,00</h1>
      </div>
        </div>
       
    </div>
    )
} 

export default HeroSection;
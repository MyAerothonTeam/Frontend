import './LeftPanel.styles.css'
import symptomsImage from '../../Images/symptom.png';

const LeftPanel = (props) => {
    console.log(props.data)
    return(
    <div className="leftPanel">
        <img src={symptomsImage} className="symptomsImage" alt="Symptoms logo"/>
        <h2>Please visit your nearest HealthCare Center!!!!!</h2>
    </div>
    )
} 

export default LeftPanel;
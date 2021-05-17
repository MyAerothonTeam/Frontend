import './Header.styles.css'
import { BrowserRouter,Link } from 'react-router-dom';
const Header = () => {
    return(
        <div className="header">
            <div className="title">
                <a href="#default">Covid<br/>Dashbord</a>
            </div>
            <div className="state">
                <label  for="state">Select state :</label>
                <select name="state" id="state">
                    <option value="Maharastra">Maharastra</option>
                    <option value="keral">keral</option>
                    <option value="Up">Up</option>
                    <option value="Mp">Mp</option>
                </select>  
            </div> 
            <div className="sec">
                    <a href="recovery" >Death rate/ Recovery rate</a>
            </div>
            <div className="pred">
                <a href="prediction">Prediction</a>
            </div>
         </div>    
         
    )
} 

export default Header;
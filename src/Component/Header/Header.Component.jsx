import './Header.styles.css'

const Header = () => {
    return(
        <div className="header">
            <div class="title">
                <a href="#default" className="logo">Covid<br/>Dashbord</a>
            </div>
            <div class="sec">
                <label  class="header_middle" for="state">Select state :</label>
                <select name="state" id="state">
                    <option value="Maharastra">Maharastra</option>
                    <option value="keral">keral</option>
                    <option value="Up">Up</option>
                    <option value="Mp">Mp</option>
                </select>   
                <a href="#death_rate" class="header_right">Death rate/ Recovery rate</a>
                <a class="header_prediction" href="#prediction">prediction</a>
            </div>
         </div>    

    )
} 

export default Header;
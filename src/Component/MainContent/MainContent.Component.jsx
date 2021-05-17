import './MainContent.styles.css'
import { Route, Switch } from 'react-router-dom';
import AboutPage from '../AboutPage/AboutPage.Component';
import ContactPage from '../ContactPage/ContactPage.Component';
import RecoveryPage from '../Recovery_View/RecoveryPage.Component';
const MainContent = () => {
    return(
    <div className="mainContent">
        <Switch>
            <Route path={'/about'} component={AboutPage} />
            <Route path={'/contact'} component={ContactPage} />
            <Route path={'/recovery'}component={RecoveryPage}/>
        </Switch>
    </div>
    )
} 

export default MainContent;
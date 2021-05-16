import './MainContent.styles.css'
import { Route, Switch } from 'react-router-dom';
import AboutPage from '../AboutPage/AboutPage.Component';
import ContactPage from '../ContactPage/ContactPage.Component';

const MainContent = () => {
    return(
    <div className="mainContent">
        <Switch>
            <Route path={'/about'} component={AboutPage} />
            <Route path={'/contact'} component={ContactPage} />
        </Switch>
    </div>
    )
} 

export default MainContent;
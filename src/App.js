import './App.css';
import Header from './Component/Header/Header.Component';
import HeroSection from './Component/HeroSection/HeroSection.Component'
import LeftPanel from './Component/LeftPanel/LeftPanel.Component'
import MainContent from './Component/MainContent/MainContent.Component'
import RightPanel from './Component/RightPanel/RightPanel.Component'
import { BrowserRouter,Link } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>  
      <div className="App">
        {/* <Link to={'/about'}><button onClick={() => console.log("about stmt")}>About</button></Link>
        <Link to={'/contact'}><button onClick={() => console.log("console stmt")}>Contact</button></Link> */}
        <Header />
        <HeroSection />
        <div className="contentSection">
          <LeftPanel />
          <MainContent />
          <RightPanel />
        </div>
      </div>
    </BrowserRouter> 
  );
}

export default App;

import './App.css';
import Header from './Component/Header/Header.Component';
import HeroSection from './Component/HeroSection/HeroSection.Component'
import LeftPanel from './Component/LeftPanel/LeftPanel.Component'
import MainContent from './Component/MainContent/MainContent.Component'
import RightPanel from './Component/RightPanel/RightPanel.Component'

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <div className="contentSection">
        <LeftPanel />
        <MainContent />
        <RightPanel />
      </div>
    </div>
  );
}

export default App;

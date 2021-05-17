import './App.css';
import Header from './Component/Header/Header.Component';
import HeroSection from './Component/HeroSection/HeroSection.Component'
import LeftPanel from './Component/LeftPanel/LeftPanel.Component'
import MainContent from './Component/MainContent/MainContent.Component'
import RightPanel from './Component/RightPanel/RightPanel.Component'
import { BrowserRouter,Link } from 'react-router-dom';
import { Component } from 'react';


class App extends Component {
  constructor(props){
    super(props);
    console.log("Construtor")
    this.state ={
      data: null
    }
   
  }
  
 componentDidMount(){
    console.log("componentdidmount")
    const data =  fetch('https://api.covid19india.org/data.json')
    .then(response => response.json())
    .then(data => this.setState( { data } ) )  //promise

  }

  render(){
    if(this.state.data)
      {
        console.log("data checking", Object.values(this.state.data.statewise)[0].active)
        let count = 0
        Object.values(this.state.data.statewise).map(element => count = count + element.active)
        console.log("checking count =>",count)
        return (
          <BrowserRouter>  
            <div className="App">
              {/* <Link to={'/about'}><button onClick={() => console.log("about stmt")}>About</button></Link>
              <Link to={'/contact'}><button onClick={() => console.log("console stmt")}>Contact</button></Link> */}
              <Header />
              <HeroSection />
             {
               count
             }
              <div className="contentSection">
                <LeftPanel data={count} />
                <MainContent />
                <RightPanel />
              </div>
            </div>
          </BrowserRouter> 
        );
      }
    else
    {
       return( <h1>Data is Loading ...</h1> )
    }

  }
}

export default App;

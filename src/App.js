
import './App.css';
import Content from './Components/Content';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Particles from "react-tsparticles";

function App() {
  return (
    <div className="App">
      
        <Header/>
        <header className="App-header">
      <Content/>
      </header>
      <Footer/>
    </div>
  );
}

export default App;

import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Footer from './component/Footer';
// import { MainRoutes } from './component/Route/MainRoutes';

function App() {
  return (
    <div className="App">
 
      {/* <MainRoutes/> */}

      <Navbar/>
      <Home/>
      <Footer/>
            
    </div>
  );
}

export default App;

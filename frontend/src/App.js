import './App.css';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import { MainRoutes } from './component/Route/MainRoutes';
// import { MainRoutes } from './component/Route/MainRoutes';

function App() {
  return (
    <div className="App">
 


      {/* <Navbar/> */}
     <MainRoutes/>
      <Footer/>
            
    </div>
  );
}

export default App;

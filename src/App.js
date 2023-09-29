import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Imagefetch from './Components/Imagefetch';


function App() {
  return (
    <>
       <Navbar/>
       <Imagefetch/>
       <Footer/>
    </>
  );
}

export default App;
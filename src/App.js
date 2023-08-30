import './App.css';
import Store from './Component/Store'; 
import Navbar from './Component/NavBar';
import Header from './Component/Header';
import Footer from './Component/Footer';



function App() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <Store/>
      <Footer/>
    </div>
  );
}

export default App;

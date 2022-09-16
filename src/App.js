import logo from './logo.svg';
import './App.css';
import  ContactUs from './componets/Email';
import Navbar from './componets/Navbar/Navbar';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './componets/Home/Home';
import About from './componets/About/About';
import Footer from './componets/Footer/Footer';
import Contact from './componets/Contact/Contact';


function App() {
  return (
 <div>
  <BrowserRouter>
  <Navbar />
   <Routes>
    <Route path='/' element={<Home />}></Route>
    <Route path='/about' element={<About />}></Route>
    <Route path='/contact' element={<Contact />}></Route>
    
   </Routes>
   <Footer/>
  </BrowserRouter>
 </div>
  );
}

export default App;

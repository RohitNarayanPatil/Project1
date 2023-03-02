import Home from './components/Home';
import About from './components/About';
import Product from './components/Product';
import Template from './components/Template';
import Contact from './components/Contact';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';


function App() {

  return (

 <>
<Router>
    <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/Home.js' element={<Home />} />
        <Route path='/about.js' element={<About/>} />
        <Route path='/Product.js' element={<Product/>} />
        <Route path='/Template.js' element={<Template/>} />
        <Route path='/Contact.js' element={<Contact/>} />
    </Routes>
  
    </Router>
</> 
  );
}

export default App;

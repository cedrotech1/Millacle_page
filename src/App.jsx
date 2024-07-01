import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Footer from './Components/Footer';
import AboutB from './Pages/AboutB';
import EventB from './Pages/EventB';
import Gallery from './Pages/Gallery';
import BlogsB from './Pages/BlogsB';
import Contact from './Pages/Contact';
import Signup from './Contents/Signup';
import Login from './Contents/Login';
import Donation from './Contents/Donation';
import BlogDetail from './Contents/BlogDetail';
import ChoirDetail from './Contents/ChoirDetail';

function App() {

  return (
    <>
      <Router>
        <div className="App">
          <Navbar />
          <div className="content">
            <Routes>
              <Route path='/' element={<Home />} exact />
              <Route path='/about' element={<AboutB />} />
              <Route path='/events' element={<EventB />} />
              <Route path='/gallery' element={<Gallery />} />
              <Route path='/blogs' element={<BlogsB />} />
              <Route path='/one/:id' element={<BlogDetail />} />
              <Route path='/choir/:id' element={<ChoirDetail />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/signup' element={<Signup />} />
              <Route path='/login' element={<Login />} />
              <Route path='/payment' element={<Donation />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </>
  )
}

export default App

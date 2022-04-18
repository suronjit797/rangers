import { Route, Routes } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

import Header from './components/Header/Header'
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import Footer from './components/Footer/Footer';
import Login from './pages/Login/Login';
import Regiester from './pages/Register/Register';
import Blog from './pages/Blog/Blog';
import About from './pages/About/About';
import Checkout from './pages/Checkout/Checkout';
import RequireAuth from './components/RequireAuth/RequireAuth';
import Service from './pages/Service/Service';
import Contact from './pages/Contact/Contact';
import SingleService from './pages/SingleService/SingleService';


function App() {
  return (
    <div className='app'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Regiester />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<RequireAuth> <Contact /> </RequireAuth>} />
        <Route path='/services' element={<Service />} >
        </Route>
        {/* <Route path='/services/:serviceId' element={<SingleService />} /> */}
        <Route path='/services/:serviceId' element={<SingleService />} />


        <Route path='/checkout' element={<RequireAuth> <Checkout /></RequireAuth>} />


        <Route path='*' element={<NotFound />} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;

import { Route, Routes } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import Header from './components/Header/Header'
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import Footer from './components/Footer/Footer';
import Login from './pages/Login/Login';
import Regiester from './pages/Register/Register';

function App() {
  return (
    <div className='app'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Regiester />} />

        <Route path='*' element={<NotFound />} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import Agendar from './pages/Agendar';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

function App() {
  const location = useLocation(); // Necessário para rastrear a página atual

  return (
    <div className="d-flex flex-column min-vh-100">
    <Header />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/agendar" element={<Agendar />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
    
  );
}

export default App;
import styles from './App.module.css';
import { Route, Routes } from 'react-router-dom/';
import Header from './components/Header';
import Footer from './components/Footer';
import NotFound from './components/NotFound';
import Home from './pages/home/Home';
import League from './pages/league/League';
import Session from './pages/session/Session';

function App() {
  return (
    <div className="flex flex-column justify-content-between min-h-screen mx-3">
      <Header />
      <main className='col-12 md:col-6 flex-grow-1 m-auto p-0'>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/league/" element={<League />} />
          <Route exact path="/session/" element={<Session />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;

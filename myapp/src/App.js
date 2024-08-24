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
    <div className={styles.App}>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/league/:id" element={<League />} />
        <Route exact path="/session/:id" element={<Session />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

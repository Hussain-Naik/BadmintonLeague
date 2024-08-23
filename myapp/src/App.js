import styles from './App.module.css';
import { Route, Routes } from 'react-router-dom/';

function App() {
  return (
    <div className={styles.App}>
      <Routes>
        <Route exact path="/" element={<p>home</p>} />
        <Route exact path="/league/:id" element={<p>league</p>} />
        <Route exact path="/session/:id" element={<p>session</p>} />
        <Route path="*" element={<p>Not found</p>} />
      </Routes>
    </div>
  );
}

export default App;

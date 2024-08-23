import styles from './App.module.css';
import { Route, Routes } from 'react-router-dom/';

function App() {
  return (
    <div className={styles.App}>
      <Routes>
        <Route exact path="/BadmintonLeague/" element={<p>home</p>} />
        <Route exact path="/BadmintonLeague/league/:id" element={<p>league</p>} />
        <Route exact path="/BadmintonLeague/session/:id" element={<p>session</p>} />
        <Route path="*" element={<p>Not found</p>} />
      </Routes>
    </div>
  );
}

export default App;

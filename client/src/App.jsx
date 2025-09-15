import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/HomePage/HomePage';
import styles from './styles/App.module.css';
import { MemoriesProvider } from './context/memoryContext';

function App() {
  return (
    <MemoriesProvider>
      <BrowserRouter>
        <div className={styles.app}>
          <header className={styles.appHeader}>
            <img src="/glimmoryLogo.png" alt="Logo" className={styles.appLogo} />
            <nav className={styles.appNav}>
              <Link to="/" className={styles.appLink}>Home</Link>
            </nav>
          </header>
          <main className={styles.main}>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </main>
          <footer className={styles.footer}>
            <p>&copy; 2025 My App</p>
          </footer>
        </div>
      </BrowserRouter>
    </MemoriesProvider>
  );
}

export default App;

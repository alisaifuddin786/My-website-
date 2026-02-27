import { NavLink, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PackagesPage from './pages/PackagesPage';
import PackageDetailsPage from './pages/PackageDetailsPage';

function App() {
  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="container topbar-inner">
          <h1 className="brand">WanderNest</h1>
          <nav className="nav-links">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/packages">Packages</NavLink>
          </nav>
        </div>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/packages" element={<PackagesPage />} />
          <Route path="/packages/:packageId" element={<PackageDetailsPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

import { NavLink, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import HotelsPage from './pages/HotelsPage';
import ToursPage from './pages/ToursPage';
import BookingPage from './pages/BookingPage';
import AdminDashboardPage from './pages/AdminDashboardPage';

function App() {
  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="container topbar-inner">
          <div className="brand">TripNova</div>
          <nav className="nav-links">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/hotels">Hotels</NavLink>
            <NavLink to="/tours">Tour Packages</NavLink>
            <NavLink to="/booking">Booking Form</NavLink>
            <NavLink to="/admin">Admin Dashboard</NavLink>
          </nav>
        </div>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/hotels" element={<HotelsPage />} />
          <Route path="/tours" element={<ToursPage />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/admin" element={<AdminDashboardPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

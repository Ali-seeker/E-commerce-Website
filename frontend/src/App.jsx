import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Header from './components/Header';
import { CartProvider } from './context/CartContext';
import ProtectedRoute from "./routes/ProtectedRoute.jsx"; // ✅ ADD THIS
import ForgotPassword from './pages/ForgotPassword';

function App() {
  return (
    <CartProvider> {/* ✅ Wrap everything */}
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;

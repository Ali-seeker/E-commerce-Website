import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 py-2 mb-4">
      <Link className="navbar-brand text-white" to="/">🛒 E-Shop</Link>
      <div className="ms-auto">
        <Link className="btn btn-outline-light me-2" to="/login">Login</Link>
        <Link className="btn btn-outline-light" to="/profile">Profile</Link>
      </div>
    </nav>
  );
}

export default Header;

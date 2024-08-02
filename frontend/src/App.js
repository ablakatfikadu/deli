import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import About from './pages/About';
import Contact from './pages/Contact';
import LoginPage from './pages/LoginPage';
import logo from './assets/logo1.webp';
import back from './assets/back.jpg'; // Import the background image
import Register from './pages/Register';

function App() {
  return (
    <div className="app-container">
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container">
          <Link className="navbar-brand" to="/"> <img src={logo} style={{
            height: '100px',
            width: 'auto',
             marginRight: '-50px'
          }} alt="Logo" /></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link active" to="/create-post">Create Post</Link>
              </li> */}
              <li className="nav-item">
                <Link className="nav-link active" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/contact">Contact</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/login">Login</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="content-wrapper">
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create-post" element={<CreatePost />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </div>

      <footer className="footer bg-white text-dark py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <p>&copy; 2024 Your App Name. All rights reserved.</p>
            </div>
            <div className="col-md-6 text-md-end">
              <ul className="list-inline mb-0">
                <li className="list-inline-item"><Link to="/about" className="text-dark">About</Link></li>
                <li className="list-inline-item"><Link to="/contact" className="text-dark">Contact</Link></li>
                <li className="list-inline-item"><Link to="/privacy" className="text-dark">Privacy</Link></li>
                <li className="list-inline-item"><Link to="/terms" className="text-dark">Terms</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      <style>{`
        .app-container {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
        }

        .nav-link.active {
          position: relative;
          color: #333;
          padding: 0.7rem 1.2rem;
          margin: 0 0.5rem;
        }

        .nav-link.active::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background-color: #333;
          transition: transform 0.3s ease-in-out;
          transform: scaleX(0);
        }

        .nav-link.active:hover::after {
          transform: scaleX(1);
        }

        .nav-link.active:hover {
          color: #555;
        }

        .nav-link {
          font-size: 1.1rem;
          font-weight: 500;
          padding: 0.7rem 1.2rem;
          margin: 0 0.5rem;
          transition: color 0.3s ease-in-out;
          color: #333;
        }

        .nav-link:hover {
          color: #555;
        }

        .navbar-brand {
          font-size: 1.5rem;
          font-weight: 700;
          color: #333;
        }

       .navbar {
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  padding: 1rem 0;
  height: 100px; /* Set the desired height */
}

        .content-wrapper {
  flex-grow: 1;
  background-image: url(${back});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

        .content {
          padding: 2rem;
        }

        .card {
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease-in-out;
        }

        .card:hover {
          transform: translateY(-5px);
        }

        .footer {
          padding-top: 1rem;
          padding-bottom: 1rem;
        }

        .footer a {
          text-decoration: none;
          color: #333;
        }
      `}</style>
    </div>
  );
}

export default App;
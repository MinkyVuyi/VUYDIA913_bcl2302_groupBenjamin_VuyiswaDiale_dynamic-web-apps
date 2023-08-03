import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

export default function Header() {
  return (
    <div className="bg-dark shadow">
      <div className="container p-1">
        <div className="d-flex flex-row mb-3 justify-content-center align-items-center me-5">
          <div className="p-2">
            <img
              src="https://media.giphy.com/media/hzq23HkdnghI2no1tZ/giphy.gif"
              alt="mic"
              className="img-thumbnail mt-3"
              width="120"
              height="120"
            />
          </div>
          <div className="p-2">
            <h1 className="text-light pt-5 px-4 mb-0">The Real Pod`Max</h1>
          </div>
        </div>
        <nav className="navbar navbar-expand-lg navbar-dark">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="#home">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#episodes">
                    Episodes
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#about">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contact">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

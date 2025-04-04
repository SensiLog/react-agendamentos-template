import React from "react";
import { Link } from "react-router-dom";

function Header() {
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <header className="bg-white shadow-sm fixed-top">
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container">
          {/* Logo */}
          <a href="/" className="navbar-brand d-flex align-items-center">
            <img
              src="/Logo Sensilog.svg"
              alt="SensiLog Logo"
              className="me-2"
              width="30"
              height="30"
            />
            <span className="fw-bold text-black">SensiLog</span>
          </a>

          {/* Toggle button for mobile */}
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

          {/* Navigation links */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link text-black">
                  Início
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/agendar" className="nav-link text-black">
                  Agende
                </Link>
              </li>
              <li className="nav-item">
                <a
                  onClick={scrollToBottom}
                  className="nav-link text-black"
                  style={{ cursor: "pointer" }}
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
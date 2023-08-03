
// export default function Header() {
//   return (
//     <div className="bg-dark" >
//      <div className="container p-1">
//   <div className="d-flex flex-row mb-3 justify-content-center me-5">
//   <div className="p2">
//     <img src="https://media3.giphy.com/media/LU0EPR6tWaNREI35hU/giphy.gif?cid=ecf05e47a1wqzy7jr2kvn0evgscohofko2z3xjl41h46ykhm&ep=v1_gifs_search&rid=giphy.gif&ct=g" alt="mic" className=" img-thumbnail mt-3 " width="120" height="120"/>
//     </div>
//     <div className="p2">
//   <h1 className="text-light pt-5 px-4 mb-0">Pod^Max</h1>
// </div>
// </div>
//   <nav className="navbar ">
//   <div className="container-fluid ">
    
//   </div>
// </nav>
//   </div>
//   </div>
//   )
// }

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

export default function Header() {
  return (
    <div className="bg-dark">
      <div className="container p-1">
        <div className="d-flex flex-row mb-3 justify-content-center align-items-center me-5">
          <div className="p-2">
            <img
              src="https://media3.giphy.com/media/LU0EPR6tWaNREI35hU/giphy.gif?cid=ecf05e47a1wqzy7jr2kvn0evgscohofko2z3xjl41h46ykhm&ep=v1_gifs_search&rid=giphy.gif&ct=g"
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

import React from "react";
import { Link } from "react-router-dom";
// import logosharity from "../images/logosharity.png"

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Nav() {
	return (
		<div className="sticky-top">
			<Link className="navbar-brand" to="/">
				<img src="./images/Sharlogotr1.png" className="logo" alt="Sharity logo"></img> {}
      		</Link>
			<nav className="navbar navbar-dark">
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<span>Sharity</span>
			</nav>

			<div className="collapse" id="navbarToggleExternalContent">
				<ul className="navbar-nav">
					<li className="nav-item">
						<Link
							to="/register"
							className={window.location.pathname === "/register" ? "nav-link active" : "nav-link"}
						>
							Register
            </Link>
					</li>
					<li className="nav-item">
						<Link
							to="/submit-donations"
							className={window.location.pathname === "/submit-donations" ? "nav-link active" : "nav-link"}
						>
							Donations Form
            </Link>
					</li>
					<li className="nav-item">
						<Link
							to="/Login"
							className={
								window.location.pathname === "/login" || window.location.pathname === "/login"
									? "nav-link active"
									: "nav-link"
							}
						>
							Login
            </Link>
					</li>
					<li className="nav-item">
						<Link
							to="/profile"
							className={
								window.location.pathname === "/profile" || window.location.pathname === "/profile"
									? "nav-link active"
									: "nav-link"
							}
						>
							Profile
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/available-donations"
              className={
                window.location.pathname === "/available-donations" || window.location.pathname === "/available-donations"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Donations
            </Link>
					</li>
					<li className="nav-item">
						<Link
							to="/pick-ups"
							className={
								window.location.pathname === "/" || window.location.pathname === "/about"
									? "nav-link active"
									: "nav-link"
							}
						>
							Pick Ups
            </Link>
					</li>
					<li className="nav-item">
						<Link
							to="/about"
							className={window.location.pathname === "/about" ? "nav-link active" : "nav-link"}
						>
							About
            </Link>
					</li>

				</ul>
			</div>
		</div>
	);
}

export default Nav;
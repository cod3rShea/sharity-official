import React from "react";
import { Link } from "react-router-dom";
// import logosharity from "../images/logosharity.png"

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Nav() {
	return (
		<div className="sticky-top">
			<nav className="navbar navbar-dark">
				<Link className="navbar-brand" to="/">
					<img src="./images/Sharlogotr1.png" className="logo" alt="Sharity logo"></img> {}
				</Link>
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
			</nav>

			<div className="collapse" id="navbarToggleExternalContent">
				<ul className="navbar-nav">
					<li className="nav-item">
						<Link
							to="/user-registration"
							className={window.location.pathname === "https://sharity-official.herokuapp.com/user-registration" ? "nav-link active" : "nav-link"}
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
							to="/sign-in"
							className={
								window.location.pathname === "/sign-in" || window.location.pathname === "/sign-in"
									? "nav-link active"
									: "nav-link"
							}
						>
							Login
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
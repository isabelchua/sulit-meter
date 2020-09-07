import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
	return (
		<div className="nav-bar">
			<Link to="/">Shops </Link> | <Link to="/login">Login</Link> |{" "}
			<Link to="/register">Register</Link>
		</div>
	);
}

export default NavBar;

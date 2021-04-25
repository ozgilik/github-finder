import React, { Component } from 'react'
import {Link} from "react-router-dom"

const Navbar = (props) => {
		return (
			<nav className="navbar navbar-dark bg-primary">
				<div className="container">
					<Link to="/" className="navbar-brand d-flex align-items-center">
						<i className={props.icon + " mr-2"}></i>
						{props.title}
					</Link>
				</div>
			</nav>
		);
}

export default Navbar

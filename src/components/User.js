import React from 'react';
import {Link} from "react-router-dom";

const Users = ({user}) => {

	const {name,login,avatar_url,html_url} = user;

	return (
		<div className="container">
			<div className="card my-4">
				<div className="row">
					<div className="col">
						<div className="card-header d-flex align-items-center">
							<img
								src={avatar_url}
								alt={name}
								className="img-fluid profile-image rounded-circle border mr-2"
							/>
							<h3 className="card-title m-0 text-black-50">
								{name ? name : `@${login}`}
							</h3>
							<div className="d-flex ml-auto">
								<Link
									to={{ pathname: html_url }}
									target="_blank"
									className="btn btn-dark btn-sm mr-2"
								>
									<i className="fab fa-github mr-1"></i>Get Github
								</Link>
								<Link
									to={`/user/${login}`}
									className="btn btn-primary btn-sm"
								>
									<i className="fas fa-search"></i>
									Get Details
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Users

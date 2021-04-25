import React, { useContext, useEffect } from 'react';
import {Link} from "react-router-dom";
import GithubContext from '../context/GithubContext';
import Loading from './Loading';

const UserDetail = ({match}) => {
	const {getUser,loading,user,getRepos,repos} = useContext(GithubContext)

	useEffect(() => {
		getUser(match.params.login);
		getRepos(match.params.login);
	}, []);

	const {
		avatar_url,
		name,
		login,
		html_url,
		public_repos,
		bio,
		followers,
		blog,
		location,
	} = user;

	if (loading) return <Loading />;

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
								{name ? name : login}
							</h3>
							<div className="d-flex ml-auto">
								<Link
									to={{ pathname: html_url }}
									target="_blank"
									className="btn btn-dark btn-sm mr-2"
								>
									<i className="fab fa-github mr-1"></i>
									Get Github
								</Link>
							</div>
						</div>
						<div className="card-body">
							{bio && (
								<div className="mb-2">
									<h5>Bio</h5>
									<p>{bio}</p>
								</div>
							)}
							<span className="badge badge-light">Repos : {public_repos}</span>
							<span className="badge badge-light ml-1">
								Followers : {followers}
							</span>
							<span className="badge badge-light ml-1">
								Blog :{" "}
								<Link
									to={{ pathname: blog }}
									target="_blank"
									className="text-blue"
								>
									{blog}
								</Link>
							</span>
						</div>
						{repos && (
							<div className="mt-1">
								<ol className="list-group rounded-0 list-group-flush list-group-numbered">
									<li className="list-group-item bg-light text-blue font-weight-bold active">
										Repos
									</li>
									{repos.map((repo) => (
										<li
											key={repo.id}
											className="list-group-item d-flex justify-content-between align-items-start"
										>
											<div className="ms-2 me-auto">
												<div className="fw-bold">
													<Link
														to={{ pathname: repo.html_url }}
														target="_blank"
														className="text-link"
													>
														<i className="fas fa-link mr-2"></i>
														{repo.name}
													</Link>
												</div>
												{repo.description}
											</div>
											<span className="badge bg-dark rounded text-white">
												<i className="fas fa-star mr-2"></i>
												{repo.stargazers_count}
											</span>
										</li>
									))}
								</ol>
							</div>
						)}
						<div className="card-footer">
							<span className="text-muted">
								<i className="fas fa-location-arrow mr-1"></i>
								{location}
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UserDetail

import React, { useState,useContext } from 'react'
import GithubContext from '../context/GithubContext';

const Search = () => {
	const [keyword, setKeyword] = useState("");

	const { searchUsers, clearShow, clearResults, showAlert } = useContext(GithubContext);

	const onChange = (e) => {
		setKeyword(e.target.value);
	};

	const onSubmit = (e) => {
		e.preventDefault();
		if (keyword === "") {
			showAlert("Error! Please enter the word to search.", "warning");
		} else {
			searchUsers(keyword);
			setKeyword("");
		}
	};

	return (
		<div className="container">
			<form onSubmit={onSubmit} method="POST">
				<div className="input-group mt-4">
					<input
						type="text"
						value={keyword}
						onChange={onChange}
						className="form-control"
						placeholder="Search Github User"
					/>
					<div className="input-group-append">
						<button className="btn btn-primary" type="submit">
							Search
						</button>
					</div>
				</div>
			</form>
			{clearShow && (
				<button
					onClick={clearResults}
					className="btn btn-link mt-2 p-0"
				>
					Clear Results
				</button>
			)}
		</div>
	);
};

export default Search

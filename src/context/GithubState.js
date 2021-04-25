import React, { useReducer } from "react"
import GithubContext from "./GithubContext"
import GithubReducer from "./GithubReducer"
import Axios from "axios";

const GithubState = (props) => {
	const initialState = {
		users: [],
		user: {},
		repos: [],
		loading: false,
		clearShow: false,
		alert: null
	};

	const [state,dispatch] = useReducer(GithubReducer,initialState)

	const searchUsers = (keyword) => {
		setLoading();
		Axios.get(`https://api.github.com/search/users?q=${keyword}`).then(
			(res) => {
				dispatch({
					type: "SEARCH_USERS",
					payload: res.data.items
				})
			}
		);
	};

	const getRepos = (username) => {
		setLoading();
		Axios.get(`https://api.github.com/users/${username}/repos`).then((res) => {
			dispatch({
				type: "GET_REPOS",
				payload: res.data
			})
		});
	};

	const showAlert = (msg, type) => {
		dispatch({
			type: "SET_ALERT",
			payload: { msg, type },
		});
	};

	const getUser = (username) => {
		setLoading();
		Axios.get(`https://api.github.com/users/${username}`).then((res) => {
			dispatch({
				type: "GET_USER",
				payload: res.data
			})
		});
	};

	const clearResults = () => {
		dispatch({type:"CLEAR_USERS"})
	};

	const setLoading = () =>{
		dispatch({type:"SET_LOADING"})
	}

	return (
		<GithubContext.Provider
			value={{
				users: state.users,
				user: state.user,
				repos: state.repos,
				loading: state.loading,
				clearShow: state.clearShow,
				alert: state.alert,
				searchUsers,
				clearResults,
				getUser,
				getRepos,
				showAlert,
			}}
		>
			{props.children}
		</GithubContext.Provider>
	);
}

export default GithubState
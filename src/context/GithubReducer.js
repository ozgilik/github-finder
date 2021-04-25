const GithubReducer = (state,action) => {
	switch (action.type) {
		case "SEARCH_USERS":
			return {
				...state,
				users: action.payload,
				loading:false,
				clearShow:true,
				alert: null
			}
		case "GET_USER":
			return {
				...state,
				user: action.payload,
				loading:false
			}
		case "GET_REPOS":
			return {
				...state,
				repos: action.payload,
				loading: false
			}
		case "SET_LOADING":
			return {
				...state,
				loading:true
			}
		case "SET_ALERT":
			return {
				...state,
				alert: action.payload
			}
		case "CLEAR_USERS":
			return {
				...state,
				users: [],
				clearShow:false
			}
		default:
			return state
	}
}

export default GithubReducer
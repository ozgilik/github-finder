import React, {useContext} from 'react'
import GithubContext from '../context/GithubContext';

function Alert() {
	const {alert} = useContext(GithubContext)

	return (
		alert !== null && (
			<div className="container mt-2">
				<div className={`alert alert-${alert.type}`}>{alert.msg}</div>
			</div>
		)
	);
}

export default Alert


import React from 'react'
import loadingImg from '../img/loading.gif'

function Loading() {
	return (
		<div className="container">
			<img src={`/${loadingImg}`} alt="Loading ..." className="d-block ml-auto mr-auto mt-5 loading" />
		</div>
	)
}

export default Loading

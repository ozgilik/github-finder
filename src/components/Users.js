import React, { useContext } from 'react';
import User from './User';
import Loading from './Loading'
import GithubContext from '../context/GithubContext';

const Users = () => {
		const {loading,users} = useContext(GithubContext)
		if(loading){
			return <Loading />;
		}else{
			return (
				<div>
					{users.map((user) => (
						<User user={user} key={user.id} />
					))}
				</div>
			);
		}
}

export default Users

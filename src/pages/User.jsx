import { useEffect, useContext } from 'react'
import GithubContext from '../context/github/GithubContex'
import { useParams } from 'react-router-dom'

const User = () => {
	const params = useParams()

	const { getUser, user } = useContext(GithubContext)

	useEffect(() => {
		getUser(params.login)
	}, [])
	return <div>{user.login}</div>
}

export default User

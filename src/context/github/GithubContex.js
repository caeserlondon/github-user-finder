import { createContext, useReducer } from 'react'
import githubReducer from './GithubReducer'

const GithubContext = createContext()

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

export const GithubProvider = ({ children }) => {
	const initialState = {
		users: [],
		loading: false,
	}

	const [state, dispatch] = useReducer(githubReducer, initialState)

	// GET SEARCH RESULT

	const searchUsers = async (text) => {
		setLoading()

		const params = new URLSearchParams({
			q: text,
		})

		const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
			headers: {
				Authorization: `token ${GITHUB_TOKEN}`,
			},
		})

		// GET SEARCH RESULTS
		const { items } = await response.json()

		dispatch({
			type: 'GET_USERS',
			payload: items,
		})
	}

	// SET LOADING
	const setLoading = () =>
		dispatch({
			type: 'SET_LOADING',
		})

	// CLEAR USERS SEARCH FROM THE STATE
	const clearUsers = () =>
		dispatch({
			type: 'CLEAR_USERS',
		})

	return (
		<GithubContext.Provider
			value={{
				users: state.users,
				loading: state.loading,
				searchUsers,
				clearUsers,
			}}
		>
			{children}
		</GithubContext.Provider>
	)
}
export default GithubContext

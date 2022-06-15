import { createContext, useReducer } from 'react'
import alertReducer from './AlertReducer'

const AlertContext = createContext()

export const AlertProvider = ({ children }) => {
	const initialState = null

	const [state, dispatch] = useReducer(alertReducer, initialState)

	// SET AN ALERT
	const setAlert = (message, type) => {
		dispatch({
			type: 'SET_ALERT',
			payload: { message, type },
		})
		setTimeout(() => dispatch({ type: 'REMOVE_ALERT' }), 5000)
	}

	return (
		<AlertContext.Provider value={{ alert: state, setAlert }}>
			{children}
		</AlertContext.Provider>
	)
}

export default AlertContext

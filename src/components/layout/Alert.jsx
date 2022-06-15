import { useContext } from 'react'
import AlertContext from '../../context/alerts/AlertContext'
import searchCat from '../../assets/search.png'

const Alert = () => {
	const { alert } = useContext(AlertContext)

	return (
		alert !== null && (
			<p className='flex items-center mb-4 space-x-2 '>
				{alert.type === 'error' && (
					<img
						src={searchCat}
						alt='octocat'
						style={{ width: '90px' }}
						className='drop-shadow-md'
					/>
				)}
				<p className='flex-1 text-lg'>
					<strong>{alert.message}</strong>
				</p>
			</p>
		)
	)
}

export default Alert

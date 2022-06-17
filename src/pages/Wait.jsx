import { Link } from 'react-router-dom'
import { FaHome } from 'react-icons/fa'
import wait from '../assets/wait.png'

const Wait = () => {
	return (
		<div className='hero'>
			<div className='text-center hero-content'>
				<div className='max-w-lg'>
					<h1 className='text-lg font-bold mb-8'>Oops! ... To many requests</h1>
					<div className='text-base mb-8'>
						Github API will allow only 30 requests a minute
					</div>
					<img
						src={wait}
						alt='notfound'
						style={{ width: '120px', margin: 'auto' }}
					/>
					<Link to='/' className='btn btn-lg btn-ghost mt-5'>
						<FaHome className='mr-3' />
						Main Page
					</Link>
				</div>
			</div>
		</div>
	)
}
export default Wait

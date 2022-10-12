import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import nocat from '../assets/notfound.png';

const NotFound = () => {
	return (
		<div className='hero'>
			<div className='text-center hero-content'>
				<div className='max-w-lg'>
					<h1 className='text-3xl font-bold mb-8'>Oops! ... Page Not found</h1>
					<div className='text-lg mb-8'>
						This is not the web page you are looking for
					</div>
					<img
						src={nocat}
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
	);
};
export default NotFound;

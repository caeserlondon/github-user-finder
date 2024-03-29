import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav className='navbar mb-14 drop-shadow-md bg-neutral text-nutral-content'>
			<div className='container mx-auto'>
				<div className='flex-none px-2 mx-2'>
					<FaGithub className='inline pr-2 text-3xl' />
					<Link to='/' className='text-2xl font-bold align-middle'>
						Github User Finder
					</Link>
				</div>
				<div className='flex-1 px-2 mx-2'>
					<div className='flex justify-end'>
						<a
							href='https://github.com/caeserlondon'
							className='btn btn-ghost btn-sm rounded-btn'
							target='_blanck'
						>
							My Profile
						</a>
						<Link to='/' className='btn btn-ghost btn-sm rounded-btn'>
							Home
						</Link>
						<Link to='/about' className='btn btn-ghost btn-sm rounded-btn'>
							About
						</Link>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;

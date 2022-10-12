import aristo from '../assets/aristo.png';
import cam from '../assets/cam.png';
import cold from '../assets/cold.png';
import gangham from '../assets/gangham.png';

import search from '../assets/search.png';
import wait from '../assets/wait.png';
import walter from '../assets/walter.png';
import what from '../assets/what.png';

const About = () => {
	return (
		<div>
			<h1 className='text-3xl mb-4 font-serif'>Github User Finder</h1>
			<p className='text-xl mb-4 font-serif'>Search and find Github users</p>
			<p className='text-base mb-4 font-serif'>Version: 1.0.0</p>
			<div className='flex'>
				<img
					src={gangham}
					alt='cat'
					style={{ width: '120px', margin: 'auto' }}
				/>
				<img
					src={aristo}
					alt='cat'
					style={{ width: '120px', margin: 'auto' }}
				/>
				<img src={cold} alt='cat' style={{ width: '120px', margin: 'auto' }} />

				<img
					src={walter}
					alt='cat'
					style={{ width: '120px', margin: 'auto' }}
				/>
				<img
					src={search}
					alt='cat'
					style={{ width: '120px', margin: 'auto' }}
				/>
				<img src={wait} alt='cat' style={{ width: '120px', margin: 'auto' }} />
				<img src={what} alt='cat' style={{ width: '120px', margin: 'auto' }} />

				<img src={cam} alt='cat' style={{ width: '120px', margin: 'auto' }} />
			</div>
		</div>
	);
};

export default About;

import loader from '../../assets/loader.svg';

const Spinner = () => {
	return (
		<div className='w-100 mt-20'>
			<img
				className='text-center mx-auto'
				src={loader}
				alt='loader'
				style={{ width: '350px' }}
			/>
		</div>
	);
};

export default Spinner;

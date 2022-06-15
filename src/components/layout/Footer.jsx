import React from 'react'
import cat from '../../assets/Octocat.png'

const Footer = () => {
	const footerYear = new Date().getFullYear()

	return (
		<footer className='footer flex p-10 text-nutral-content bg-neutral footer-center drop-shadow-md'>
			<a
				href='https://docs.github.com/en/rest/guides/getting-started-with-the-rest-api'
				target='_blank'
				rel='noopener noreferrer'
			>
				<img
					src={cat}
					alt='octocat'
					style={{ width: '60px' }}
					className='drop-shadow-md'
				/>
			</a>
			<p className='flex-1'>
				Copyright &copy; {footerYear} All rights reserved
			</p>
		</footer>
	)
}

export default Footer

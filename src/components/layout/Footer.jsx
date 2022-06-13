import React from 'react'
import cat from '../../assets/Octocat.png'

const Footer = () => {
	const footerYear = new Date().getFullYear()

	return (
		<footer className='footer flex p-10 text-nutral-content bg-neutral footer-center'>
			<p className='flex-1'>
				Copyright &copy; {footerYear} All rights reserved
			</p>
			<img src={cat} alt='octocat' style={{ width: '60px' }} />
		</footer>
	)
}

export default Footer

import React from 'react'

import logo from '../../assets/logo/logo-primary.svg'

import './Header.scss'

const Header = () => {
	return (
		<div className='app-header'>
			<img src={logo} alt='logo' />
		</div>
	)
}

export default Header

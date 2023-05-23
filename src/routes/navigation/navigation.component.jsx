import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';

import NavLogo from '../../assets/mj-logo-primary-transparent.png';
import './navigation.styles.scss';

const Navigation = () => {
	return (
		<Fragment>
			<div className='navigation'>
				<Link className='logo-container' to='/'>
					<img src={NavLogo} alt='logo' className='logo' />
				</Link>
				<div className='navigation-links-container'>
					<Link className='navigation-link' to='/shop'>
						SHOP
					</Link>
					<Link className='navigation-link' to='/sign-in'>
						Sign-In
					</Link>
				</div>
			</div>
			<Outlet />
		</Fragment>
	);
};

export default Navigation;

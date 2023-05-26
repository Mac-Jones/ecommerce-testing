import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';

import NavLogo from '../../assets/mj-logo-primary-transparent.png';
import { UserContext } from '../../contexts/user.context';

import { signOutUser } from '../../utils/firebase/firebase.utils.js';

import './navigation.styles.scss';

const Navigation = () => {
	const { currentUser } = useContext(UserContext);

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
					{currentUser ? (
						<span className='nav-link' onClick={signOutUser}>
							SIGN OUT
						</span>
					) : (
						<Link className='navigation-link' to='/auth'>
							SIGN IN
						</Link>
					)}
				</div>
			</div>
			<Outlet />
		</Fragment>
	);
};

export default Navigation;

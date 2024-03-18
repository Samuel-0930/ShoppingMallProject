// Navbar.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faBagShopping } from '@fortawesome/free-solid-svg-icons';

type Props = {
	// props의 타입 정의
};

const Navbar: React.FC<Props> = () => {
	return (
		<header className='flex justify-between border-b border-gray-300 p-2'>
			<Link
				to='/'
				className='flex items-center text-4xl text-brand font-extralight gap-2'>
				<FontAwesomeIcon icon={faBagShopping} />
				<h1>Shoppy</h1>
			</Link>
			<nav className='flex items-center gap-4 font-semibold'>
				<Link to='/products'>Products</Link>
				<Link to='/carts'>Carts</Link>
				<Link
					to='/products/new'
					className='text-2xl'>
					<FontAwesomeIcon icon={faPencil} />
				</Link>
				<button>Login</button>
			</nav>
		</header>
	);
};

export default Navbar;

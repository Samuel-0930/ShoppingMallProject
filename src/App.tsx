// App.tsx
import React from 'react';
import { Outlet } from 'react-router-dom';

type Props = {
	// props의 타입 정의
};

const App: React.FC<Props> = () => {
	return (
		<>
			<header>
				<nav>
					<ul className='flex gap-6'>
						<li>
							<a href='/'>홈 페이지</a>
						</li>
						<li>
							<a href='/products'>제품 페이지</a>
						</li>
						<li>
							<a href='/products/new'>새 제품</a>
						</li>
						<li>
							<a href='/products/123123'>제품 상세페이지</a>
						</li>
						<li>
							<a href='/carts'>장바구니</a>
						</li>
					</ul>
				</nav>
			</header>
			<Outlet />
		</>
	);
};

export default App;

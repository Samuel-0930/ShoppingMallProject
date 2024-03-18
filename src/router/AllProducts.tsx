// AllProducts.tsx
import React from 'react';
import { Outlet } from 'react-router-dom';

type Props = {
	// props의 타입 정의
};

const AllProducts: React.FC<Props> = () => {
	return (
		<>
			<div>모든 제품</div>
			<Outlet />
		</>
	);
};

export default AllProducts;

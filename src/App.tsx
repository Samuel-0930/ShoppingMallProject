// App.tsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';

type Props = {
	// props의 타입 정의
};

const App: React.FC<Props> = () => {
	return (
		<>
			<Navbar />
			<Outlet />
		</>
	);
};

export default App;

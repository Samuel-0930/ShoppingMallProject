// Router.tsx
import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import AllProducts from './router/AllProducts';
import Home from './router/Home';
import MyCart from './router/MyCart';
import NewProduct from './router/NewProduct';
import ProductDetail from './router/ProductDetail';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: '',
				element: <Home />,
			},
			{
				path: 'products',
				element: <AllProducts />,
				children: [
					{
						path: 'new',
						element: <NewProduct />,
					},
					{
						path: ':id',
						element: <ProductDetail />,
					},
				],
			},
			{
				path: 'carts',
				element: <MyCart />,
			},
		],
	},
]);

export default router;

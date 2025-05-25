import { Outlet } from 'react-router-dom';
import { Header } from '../organisms/Header';

export const RootLayout = () => {
	return (
		<>
			<Header />
			<Outlet />
		</>
	);
};

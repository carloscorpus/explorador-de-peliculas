import { Outlet } from 'react-router-dom';
import { Header } from '../organisms/Header';
import { SearchMovie } from '../organisms/SearchMovie';
import { ContainerApp } from '../atoms/ContainerApp';

export const RootLayout = () => {
	return (
		<>
			<Header />
			<SearchMovie />
			<ContainerApp
				disableGutters={true}
				component={'div'}
				sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}
			>
				<Outlet />
			</ContainerApp>
		</>
	);
};

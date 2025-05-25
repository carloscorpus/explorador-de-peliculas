import { Navigate, Route, Routes } from 'react-router-dom';

import { AllMovies } from '../components/organisms/AllMovies';
import { Header } from '../components/organisms/Header';
import { ErrorPage } from '../components/organisms/ErrorPage';

export const RouteApp = () => {
	return (
		<>
			<Header />
			<Routes>
				<Route index element={<Navigate to="allmovies?page=1" replace />} />
				<Route path="allmovies" element={<AllMovies />} />
				<Route
					path="*"
					element={
						<ErrorPage
							message="Page not found"
							status="404"
							statusText="No results were found with the requested URL"
						/>
					}
				/>
			</Routes>
		</>
	);
};

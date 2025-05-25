import { Navigate, Route, Routes } from 'react-router-dom';

import { AllMovies } from '../components/organisms/AllMovies';
import { Header } from '../components/organisms/Header';

export const RouteApp = () => {
	// 	const routes = createBrowserRouter([
	// 		{
	// 			path: '/',
	// 			element: <RootLayout />,
	// 			children: [
	// 				{
	// 					index: true,
	// 					element: <AllMovies />,
	// 				},
	// 			],
	// 		},
	// 	]);
	// MemoriR
	// 	return <RouterProvider router={routes} />;

	return (
		<>
			<Header />
			<Routes>
				<Route index element={<Navigate to="allmovies?page=1" replace />} />
				<Route path="allmovies" element={<AllMovies />} />
				<Route
					path="*"
					element={
						<>
							<div>MONGOL</div>
						</>
					}
				/>
			</Routes>
		</>
	);
};

import { useLocation, useSearchParams } from 'react-router-dom';
import { useApi } from '../hooks/useApi';
import type { URLAPIResponseID } from '../types/typeAllMoviesSearch';
import { AllCategoriesDataContext } from './AllCategoriesDataContext';
import { useEffect, useState, type ReactNode } from 'react';
import { isSuccessResponse } from '../helpers/apiTypeResponse';

type AllCategoriesStateContexProps = {
	children: ReactNode;
};

export const AllCategoriesStateContex = ({ children }: AllCategoriesStateContexProps) => {
	const [searchParams] = useSearchParams();

	const parametroPageURL = Number(searchParams.get('page') || 1);

	const parametroMovies = searchParams.get('s') ?? 'batman';
	const [movie, setMovie] = useState<string>(parametroMovies);

	const API_KEY_OMDB = import.meta.env.VITE_API_KEY_OMDB;
	const location = useLocation();
	const consultaInvalida = location.pathname !== '/allmovies';

	const URL_OMBD = consultaInvalida
		? ''
		: `http://www.omdbapi.com/?apikey=${API_KEY_OMDB}&s=${movie}&page=${parametroPageURL}`;

	const { data, error, loading } = useApi<URLAPIResponseID>(URL_OMBD);

	const limitPages = 10;
	const amountPages = data && isSuccessResponse(data) ? Math.ceil(parseInt(data.totalResults) / limitPages) : 0;

	useEffect(() => {
		const newParamMovie = searchParams.get('s') ?? 'batman';
		setMovie(newParamMovie);
	}, [searchParams]);

	return (
		<AllCategoriesDataContext.Provider
			value={{
				data,
				error,
				loading,
				amountPages,
				pageActuality: parametroPageURL,
				setMovie,
				movie,
				parametroMovies,
			}}
		>
			{children}
		</AllCategoriesDataContext.Provider>
	);
};

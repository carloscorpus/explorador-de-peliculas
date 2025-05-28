import { useLocation, useSearchParams } from 'react-router-dom';
import { useApi } from '../hooks/useApi';
import type { URLAPIResponseID } from '../types/typeAllMoviesSearch';
import { AllCategoriesDataContext } from './AllCategoriesDataContext';
import { useState, type ReactNode } from 'react';
import { isSuccessResponse } from '../helpers/apiTypeResponse';

type AllCategoriesStateContexProps = {
	children: ReactNode;
};

export const AllCategoriesStateContex = ({ children }: AllCategoriesStateContexProps) => {
	const [movie, setMovie] = useState<string>('barbie');

	const API_KEY_OMDB = import.meta.env.VITE_API_KEY_OMDB;
	const location = useLocation();

	const [searchParams] = useSearchParams();
	const pageFromURL = Number(searchParams.get('page'));
	const consultaInvalida = location.pathname !== '/allmovies';

	const URL_OMBD = consultaInvalida
		? ''
		: `http://www.omdbapi.com/?apikey=${API_KEY_OMDB}&s=${movie}&page=${pageFromURL}`;

	const { data, error, loading } = useApi<URLAPIResponseID>(URL_OMBD);

	const limitPages = 10;
	const amountPages = data && isSuccessResponse(data) ? Math.ceil(parseInt(data.totalResults) / limitPages) : 0;
	return (
		<AllCategoriesDataContext.Provider
			value={{ data, error, loading, amountPages, pageActuality: pageFromURL, setMovie, movie }}
		>
			{children}
		</AllCategoriesDataContext.Provider>
	);
};

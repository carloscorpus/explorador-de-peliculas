import type { URLAPIMovie } from '../types/typeMovie';
import { useApi } from './useApi';

export const useMovieDetail = (id?: string) => {
	const API_KEY_OMDB = import.meta.env.VITE_API_KEY_OMDB;

	const URL_OMDB = id ? `http://www.omdbapi.com/?apikey=${API_KEY_OMDB}&i=${id}&plot=full` : '';

	const { data, error, loading } = useApi<URLAPIMovie>(URL_OMDB);

	return {
		data,
		error,
		loading,
	};
};
